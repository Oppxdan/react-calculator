import './calculator.styles.css';

function Calculator(props) {


    return (
        <div className="calculator">
                <div className="output">
                    <h2>{props.result}</h2>
                </div>
            <section className="calc-grid">
                <button className="calc-btn" onClick={() => props.addNumber("7")}>7</button>
                <button className="calc-btn" onClick={() => props.addNumber("8")}>8</button>
                <button className="calc-btn" onClick={() => props.addNumber("9")}>9</button>
                <button className="calc-btn operand" onClick={() => props.addNumber("/")}>/</button> 
                <button className="calc-btn" onClick={() => props.addNumber("4")}>4</button> 
                <button className="calc-btn" onClick={() => props.addNumber("5")}>5</button> 
                <button className="calc-btn" onClick={() => props.addNumber("6")}>6</button> 
                <button className="calc-btn operand" onClick={() => props.addNumber("*")}>X</button> 
                <button className="calc-btn" onClick={() => props.addNumber("1")}>1</button> 
                <button className="calc-btn" onClick={() => props.addNumber("2")}>2</button> 
                <button className="calc-btn" onClick={() => props.addNumber("3")}>3</button> 
                <button className="calc-btn operand" onClick={() => props.addNumber("-")}>-</button> 
                <button className="calc-btn" onClick={() => props.addNumber("0")}>0</button> 
                <button className="calc-btn" onClick={() => props.addDot(".")}>.</button> 
                <button className="calc-btn" onClick={props.calculate}>=</button> 
                <button className="calc-btn operand" onClick={() => props.addNumber("+")}>+</button> 
                <button className="calc-btn red-btn" onClick={props.backspace}>⌫</button>
                <button className="calc-btn red-btn" onClick={props.clear}>AC</button>  
            </section>
        </div>
    )
}

export default Calculator;