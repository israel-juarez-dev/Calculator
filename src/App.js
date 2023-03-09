import './App.css';
import {useState} from "react";

function App() {

  const [value1, setValue1] = useState()
  const [value2, setValue2] = useState()
  const [result, setResult] = useState()

  const changeInput1 = (e) => {
    setValue1(parseInt(e.target.value))
  }
  const changeInput2 = (e) => {
    setValue2(parseInt(e.target.value))
  }
  const addNumbers = () => {
    setResult(value1 + value2)
  }
  const subtractNumbers = () => {
    setResult(value1 - value2)
  }
  const multiplyNumbers = () => {
    setResult(value1 * value2)
  }
  const divideNumbers = () => {
    setResult(value1 / value2)
  }
  const clearNumbers = () => {
    setValue1("")
    setValue2("")
    setResult("")
  }

  return (
    <div className="App">
      <input onChange={changeInput1} value={value1}></input>
      <input onChange={changeInput2} value={value2}></input>
      <button onClick={addNumbers}>Add</button>
      <button onClick={subtractNumbers}>Subtract</button>
      <button onClick={multiplyNumbers}>Multiply</button>
      <button onClick={divideNumbers}>Divide</button>
      <button onClick={clearNumbers}>Clear Calculator</button>
      <h1>{result}</h1>
    </div>
  );
}

export default App;
