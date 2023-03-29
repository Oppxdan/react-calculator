import './App.css';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState("");

  const addNumber = (value) => {
    const newResult = String(result.concat(value));

    setResult(newResult);
  }

  const addDot = (value) => {
    if (result.includes(".") == false) {
      const newResult = String(result.concat(value));
      setResult(newResult);
    }
  }

  const calculate = () => {
    const calculation = String(eval(result));

    setResult(calculation);
  }

  const clear = () => {
    setResult("");
  }

  const backspace = () => {
    const backspacedResult = result.substring(0, result.length-1);

    setResult(backspacedResult);
  }

  return (
    <div className="App">
      <div>
        {result}
      </div>
      <section className="calc-grid">
        <button className="calc-btn" onClick={() => addNumber("7")}>7</button>
        <button className="calc-btn" onClick={() => addNumber("8")}>8</button>
        <button className="calc-btn" onClick={() => addNumber("9")}>9</button>
        <button className="calc-btn" onClick={() => addNumber("/")}>/</button> 
        <button className="calc-btn" onClick={() => addNumber("4")}>4</button> 
        <button className="calc-btn" onClick={() => addNumber("5")}>5</button> 
        <button className="calc-btn" onClick={() => addNumber("6")}>6</button> 
        <button className="calc-btn" onClick={() => addNumber("*")}>X</button> 
        <button className="calc-btn" onClick={() => addNumber("1")}>1</button> 
        <button className="calc-btn" onClick={() => addNumber("2")}>2</button> 
        <button className="calc-btn" onClick={() => addNumber("3")}>3</button> 
        <button className="calc-btn" onClick={() => addNumber("-")}>-</button> 
        <button className="calc-btn" onClick={() => addNumber("0")}>0</button> 
        <button className="calc-btn" onClick={() => addDot(".")}>.</button> 
        <button className="calc-btn" onClick={calculate}>=</button> 
        <button className="calc-btn" onClick={() => addNumber("+")}>+</button> 
        <button className="calc-btn" onClick={backspace}>⌫</button>
        <button className="calc-btn" onClick={clear}>C</button>  
      </section>
    </div>
  );
}

export default App;
