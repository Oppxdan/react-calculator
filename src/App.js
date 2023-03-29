import './App.css';
import { useState } from 'react';
import Calculator from './components/calculator/calculator.component';

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
      <Calculator 
        result={result}
        setResult={setResult}
        addNumber={addNumber}
        backspace={backspace}
        addDot = {addDot}
        calculate={calculate}
        clear={clear}
      />
    </div>
  );
}

export default App;
