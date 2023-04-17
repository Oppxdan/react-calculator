import './calculator.styles.css';
import {useState} from 'react';

function Calculator(props) {
  const [hasDecimal, setHasDecimal] = useState(false);

  const handleNumberClick = (number) => {
    if (number === '.') {
      if (hasDecimal) {
        return;
      }
      setHasDecimal(true);
    } else {
      setHasDecimal(false);
    }

    const newResult = props.result + number;
    props.setResult(newResult);
  }


  const handleOperatorClick = (operator) => {
    const newResult = props.result.endsWith(".") ? props.result.slice(0, -1) + operator : props.result + operator;
    props.setResult(newResult);
  }

  const handleCalculateClick = () => {
    try {
      const calculation = String(eval(props.result));
      props.setResult(calculation);
    } catch (error) {
      props.setResult("Error");
    }
  }

  const handleClearClick = () => {
    props.setResult("");
  }

  const handleBackspaceClick = () => {
    const backspacedResult = props.result.substring(0, props.result.length - 1);
    props.setResult(backspacedResult);
  }

  return (
    <div className="calculator">
      <div className="output">
        <h2>{props.result}</h2>
      </div>
      <section className="calc-grid">
        <button className="calc-btn" onClick={() => handleNumberClick("7")}>7</button>
        <button className="calc-btn" onClick={() => handleNumberClick("8")}>8</button>
        <button className="calc-btn" onClick={() => handleNumberClick("9")}>9</button>
        <button className="calc-btn operand" onClick={() => handleOperatorClick("/")}>/</button>
        <button className="calc-btn" onClick={() => handleNumberClick("4")}>4</button>
        <button className="calc-btn" onClick={() => handleNumberClick("5")}>5</button>
        <button className="calc-btn" onClick={() => handleNumberClick("6")}>6</button>
        <button className="calc-btn operand" onClick={() => handleOperatorClick("*")}>X</button>
        <button className="calc-btn" onClick={() => handleNumberClick("1")}>1</button>
        <button className="calc-btn" onClick={() => handleNumberClick("2")}>2</button>
        <button className="calc-btn" onClick={() => handleNumberClick("3")}>3</button>
        <button className="calc-btn operand" onClick={() => handleOperatorClick("-")}>-</button>
        <button className="calc-btn" onClick={() => handleNumberClick("0")}>0</button>
        <button className="calc-btn" onClick={() => handleNumberClick(".")}>.</button>
        <button className="calc-btn" onClick={handleCalculateClick}>=</button>
        <button className="calc-btn operand" onClick={() => handleOperatorClick("+")}>+</button>
        <button className="calc-btn red-btn" onClick={handleBackspaceClick}>⌫</button>
        <button className="calc-btn red-btn" onClick={handleClearClick}>AC</button>
      </section>
    </div>
  )
}

export default Calculator;
