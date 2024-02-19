import React, { useEffect, useState } from 'react'
import Square from './Square'
import './Board.css'

interface props {
  squares: (null | string)[]
  handleClickSquare: (i:number) => void
}

// const Board= ({squares, handleClickSquare}: props) => {
const Board: React.FC<props> = ({squares, handleClickSquare}) => {

  const renderSquare = (i:number) => {
    return <Square value={squares[i] as string} onClick={() => handleClickSquare(i)} />
  }
  
  return (
    <div>
      <h1 className='title'>TIC TAC TOE</h1>
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