import React, { useState } from 'react'
import Square from './Square'
import './Board.css'

const Board = () => {

  const [player, setPlyser] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))

  const renderSquare = (i) => {
    return <Square 
      value={squares[i]} 
      onClick={() => handleClickSquare(i)} 
    />
  }
  
  const handleClickSquare = (i) => {
    if(squares[i]) return
    const newSquares = [...squares]
    newSquares[i] = player ? 'O' : 'X'
    setSquares(newSquares)
    setPlyser(!player)
  }

  
  return (
    <div>
      <div className='status'>Next Player: {player ? 'O' : 'X'}</div>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

export default Board