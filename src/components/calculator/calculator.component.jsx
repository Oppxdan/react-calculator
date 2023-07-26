import './calculator.styles.css';
import { useState } from 'react';

function Calculator(props) {
  const [hasDecimal, setHasDecimal] = useState(false);
  const { result, setResult } = props;

  const handleNumberClick = (number) => {
    if (number === '.') {
      if (hasDecimal) {
        return;
      }
      setHasDecimal(true);
    } else {
      setHasDecimal(false);
    }

    const newResult = result + number;
    setResult(newResult);
  };

  const handleOperatorClick = (operator) => {
    const newResult = result.endsWith('.') ? result.slice(0, -1) + operator : result + operator;
    setResult(newResult);
  };

  const handleCalculateClick = () => {
    try {
      const calculation = String(eval(result));
      setResult(calculation);
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClearClick = () => {
    setResult('');
  };

  const handleBackspaceClick = () => {
    const backspacedResult = result.substring(0, result.length - 1);
    setResult(backspacedResult);
  };

  return (
    <section className="calculator">
      <div className="output">
        <h2 aria-live="polite" aria-atomic="true" role="alert">
          {result}
        </h2>
      </div>
      <form>
        <div className="calc-grid">
          <button
            className="calc-btn"
            onClick={() => handleNumberClick("7")}
            type="button"
            aria-label="7"
          >
            7
          </button>
          <button
            className="calc-btn"
            onClick={() => handleNumberClick("8")}
            type="button"
            aria-label="8"
          >
            8
          </button>
          <button
            className="calc-btn"
            onClick={() => handleNumberClick("9")}
            type="button"
            aria-label="9"
          >
            9
          </button>
          <button
            className="calc-btn operand"
            onClick={() => handleOperatorClick("/")}
            type="button"
            aria-label="Divide"
          >
            ÷
          </button>
          <button
            className="calc-btn"
            onClick={() => handleNumberClick("4")}
            type="button"
            aria-label="4"
          >
            4
          </button>
          <button
            className="calc-btn"
            onClick={() => handleNumberClick("5")}
            type="button"
            aria-label="5"
          >
            5
          </button>
          <button
            className="calc-btn"
            onClick={() => handleNumberClick("6")}
            type="button"
            aria-label="6"
          >
            6
          </button>
          <button
            className="calc-btn operand"
            onClick={() => handleOperatorClick("*")}
            type="button"
            aria-label="Multiply"
          >
            ×
          </button>
          <button
            className="calc-btn"
            onClick={() => handleNumberClick("1")}
            type="button"
            aria-label="1"
          >
            1
          </button>
          <button
            className="calc-btn"
            onClick={() => handleNumberClick("2")}
            type="button"
            aria-label="2"
          >
            2
          </button>
          <button
            className="calc-btn"
            onClick={() => handleNumberClick("3")}
            type="button"
            aria-label="3"
          >
            3
          </button>
          <button
            className="calc-btn operand"
            onClick={() => handleOperatorClick("-")}
            type="button"
            aria-label="Subtract"
          >
            -
          </button>
          <button
            className="calc-btn"
            onClick={() => handleNumberClick("0")}
            type="button"
            aria-label="0"
          >
            0
          </button>
          <button
            className="calc-btn"
            onClick={() => handleNumberClick(".")}
            type="button"
            aria-label="Decimal Point"
          >
            .
          </button>
          <button
            className="calc-btn"
            onClick={handleCalculateClick}
            type="button"
            aria-label="Equals"
          >
            =
          </button>
          <button
            className="calc-btn operand"
            onClick={() => handleOperatorClick("+")}
            type="button"
            aria-label="Add"
          >
            +
          </button>
          <button
            className="calc-btn red-btn"
            onClick={handleBackspaceClick}
            type="button"
            aria-label="Backspace"
          >
            ⌫
          </button>
          <button
            className="calc-btn red-btn"
            onClick={handleClearClick}
            type="button"
            aria-label="Clear"
          >
            AC
          </button>
        </div>
      </form>
    </section>
  );
}

export default Calculator;
