import { useEffect, useMemo, useState } from 'react';
import Board from './components/Board';

import './App.css'

function App() {

  const [player, setPlayer] = useState<boolean>(true)
  const [winner, setWinner] = useState<(null | string)>(null)
  const [squares, setSquares] = useState<(null | string)[]>(Array(9).fill(null))
  const [history, setHistory] = useState<{}[]>([])

  useEffect(() => {
    setWinner(calculateWinner(squares))
  }, [squares])

  const handleClickSquare = (i: number) => {
    if(calculateWinner(squares) || squares[i]) return
    const newSquares = [...squares]
    newSquares[i] = player ? 'O' : 'X'
    setHistory([...history, newSquares])
    setSquares(newSquares)
    setPlayer(prev=>!prev)
  }

  const calculateWinner = (squares: (null | string)[]) => {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for(let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }

  let status
  if(winner) {
    status = `Winner: ${winner}`
  } else if(winner === 'draw'){
    status = `Game Draw!!`
  } else {
    status = `Next Player: ${player ? 'O' : 'X'}`
  }
  
  const historyDiv = history.map((it, index) => {
    return <li className='btn' key={index} onClick={() => jumpTo(index)}>GAME HISTORY #{index}</li>
  })

  const jumpTo = (step:number) => {
    setPlayer(!((step % 2) === 0))
    setSquares(history[step] as string[])
    setHistory(history.slice(0, step + 1))
  }

  const resetGame = () => {
    setHistory([])
    setPlayer(true)
    setWinner(null)
    setSquares(Array(9).fill(null))
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={squares} handleClickSquare={(i) => handleClickSquare(i)}/>
      </div>
      <div className="game-info">
        <div className='status'>{status}</div>
        {
          winner ? 
            <button className='btn reset' onClick={() => resetGame()}>Game Reset</button>
            :
            <ul>
              {historyDiv}
            </ul>
        }
      </div>
    </div>
  );
}

export default App;