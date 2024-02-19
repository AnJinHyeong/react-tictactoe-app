import { Component, useState } from "react";
import './Square.css'
import { type } from "os";

type Props = {
  value: string,
  onClick: () => void
}

const Square = ({value, onClick}: Props) => {

  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  )
}

export default Square