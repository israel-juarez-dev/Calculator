import React, {useState} from 'react'

export default function Calculator() {
      // display is where the numbers and operators will show, on line 45 i have the div where display shows
  const [display, setDisplay] = useState([]);
//sad;lkfjlsdkjflkds
  const createDigits = () => {
    const digits = [];
    for (let i = 0; i < 10; i++) {
      digits.push(
        <button onClick={() => addNumber(i)} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };
  const addNumber = (i) => {
    setDisplay(display + i);
    console.log();
  };
  const addAddition = () => {
    setDisplay(display + "+");
  };
  const addSubtraction = () => {
    setDisplay(display + "-");
  };
  const addMultiplication = () => {
    setDisplay(display + "*");
  };
  const addDivision = () => {
    setDisplay(display + "/");
  };
  const addDecimal = () => {
    setDisplay(display + ".");
  };

  // This will solve the whole equation and simplyify it
  const solveEquation = () => {};

  return (
    
    <div className="App">
    <div>{display}</div>
    <div>
      <button onClick={addAddition}>+</button>
      <button onClick={addSubtraction}>-</button>
      <button onClick={addMultiplication}>*</button>
      <button onClick={addDivision}>÷</button>
    </div>
    <div>
      {createDigits()}
      <button onClick={addDecimal}>.</button>
      <button onClick={solveEquation}>=</button>
    </div>
  </div>
    
  )
}
