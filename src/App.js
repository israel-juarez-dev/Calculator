import './App.css';
import { useState } from 'react';

function App() {

  const [display, setDisplay] = useState([])

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => addNumber(i)} key={i}>{i}</button>
      )
    }
    return digits;
  }

  const addNumber = (i) => {
    setDisplay(display + i)
    console.log(i)
  }

  const addAddition = () => {
    setDisplay(display + "+")
  }
  const addSubtraction = () => {
    setDisplay(display + "-")
  }
  const addMultiplication = () => {
    setDisplay(display + "*")
  }
  const addDivision = () => {
    setDisplay(display + "/")
  }

  return (
    <div className="App">
        <div>
          {display}
        </div>
        <div>
          <button onClick={addAddition}>+</button>
          <button onClick={addSubtraction}>-</button>
          <button onClick={addMultiplication}>*</button>
          <button onClick={addDivision}>÷</button>
        </div>
        <div>
          {createDigits()}
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
    </div>
  );
}

export default App;
