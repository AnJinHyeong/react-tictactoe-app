import { useState } from 'react';
import './App.css'
import Board from './components/Board';
import History from './components/History';

function App() {

  const [player, setPlyser] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [history, setHistory] = useState([])

  const handleClickSquare = (i) => {
    if(calculateWinner(squares) || squares[i]) return
    const newSquares = [...squares]
    newSquares[i] = player ? 'O' : 'X'
    setSquares(newSquares)
    setHistory([...history, newSquares])
    setPlyser(prev=>!prev)
  }

  const calculateWinner = (squares) => {
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

  const current = history[history.length - 1]
  const winner = calculateWinner(squares)
  let status
  if(winner) {
    status = `Winner: ${winner}`
  } else {
    status = `Next Player: ${player ? 'O' : 'X'}`
  }

  console.log(history)
  
  return (
    <div className="game">
      <div className="game-board">
        <Board squares={squares} handleClickSquare={(i) => handleClickSquare(i)}/>
      </div>
      <div className="game-info">
        <div className='status'>{status}</div>
        <History history={history}/>
      </div>
    </div>
  );
}

export default App;