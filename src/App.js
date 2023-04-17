import './App.css';
import { useState } from 'react';
import Calculator from './components/calculator/calculator.component';

function App() {
  const [result, setResult] = useState("");
  const [decimalAdded, setDecimalAdded] = useState({});

  const addNumber = (value) => {
    let newResult;
    let lastChar = result[result.length - 1];
    if (value === "." && decimalAdded[lastChar]) {
      // ignore subsequent decimal points
      newResult = result;
    } else {
      if (value === ".") {
        setDecimalAdded({ ...decimalAdded, [lastChar]: true });
      }
      newResult = result.concat(value);
    }
    setResult(newResult);
  };

  const addOperator = (value) => {
    // reset decimalAdded flag when an operator is added
    setDecimalAdded({});
    setResult(result.concat(value));
  };

  const calculate = () => {
    const calculation = String(eval(result));
    setResult(calculation);
  };

  const clear = () => {
    setResult("");
    setDecimalAdded({});
  };

  const backspace = () => {
    const backspacedResult = result.substring(0, result.length - 1);
    let lastChar = result[result.length - 1];
    if (lastChar === ".") {
      // remove last element from decimalAdded object
      const { [lastChar]: deleted, ...newDecimalAdded } = decimalAdded;
      setDecimalAdded(newDecimalAdded);
    }
    setResult(backspacedResult);
  };

  return (
    <div className="App">
      <Calculator 
        result={result}
        setResult={setResult}
        addNumber={addNumber}
        addOperator={addOperator}
        backspace={backspace}
        calculate={calculate}
        clear={clear}
      />
    </div>
  );
}

export default App;
