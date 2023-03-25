import React, {useState} from 'react'
import { Button } from "antd";

export default function Calculator() {
  const [display, setDisplay] = useState("");

  const createDigits = () => {
    const digits = [];
    for (let i = 0; i < 10; i++) {
      digits.push(
        <Button type="dashed" onClick={handleClick} name={i} value={i}>
          {i}
        </Button>
      );
    }
    return digits;
  };

  const handleClick = (e) => {
    setDisplay(display.concat(e.target.name))
  }

  const calculate = () => {
    setDisplay(eval(display).toString())
  } 

  const del = () => {
    setDisplay(display.slice(0, -1))
  }

  const clear = () => {
    setDisplay("")
  }

  return (
    <div className="App">
      <div>{display}</div>
      <div>
        <Button type="dashed" name="+" onClick={handleClick}>+</Button>
        <Button type="dashed" name="-" onClick={handleClick}>-</Button>
        <Button type="dashed" name="*" onClick={handleClick}>*</Button>
        <Button type="dashed" name="/" onClick={handleClick}>÷</Button>
      </div>
      <div>
        {createDigits()}
      </div>
      <div>
        <Button type="dashed" name="." onClick={handleClick}>.</Button>
        <Button type="dashed" onClick={calculate}>=</Button>
        <Button type="dashed" onClick={del}>del</Button>
        <Button type="dashed" onClick={clear}>c</Button>
      </div>
    </div>
  )
}