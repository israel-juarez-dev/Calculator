import './App.css';
import { useState } from 'react';

function App() {
  // display is where the numbers and operators will show, on line 45 i have the div where display shows
  const [display, setDisplay] = useState([])

  const createDigits = () => {
    const digits = [];
    for (let i = 0; i < 10; i++) {
      digits.push(
        <button onClick={() => addNumber(i)} key={i}>{i}</button>
      )
    }
    return digits;
  }
  const addNumber = (i) => {
    setDisplay(display + i)
    console.log()
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
  const addDecimal = () => {
    setDisplay(display + ".")
  }

  // This will solve the whole equation and simplyify it
  const solveEquation = () => {

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
          <button onClick={addDecimal}>.</button>
          <button onClick={solveEquation}>=</button>
        </div>
    </div>
  );
}

export default App;

// I might make it so that the calculator clears the moment you click another button on the calculator after an equation has been solved
// another thing i may do though it make it so the number from a solve equation stays and can be used for another equation. if this is done instead ill just make a clear calculator button