import { Component, useState } from "react";
import './Square.css'
import { type } from "os";

type Props = {
  value: string,
  onClick: () => void
}

const Square = (props: Props) => {

  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

export default Square