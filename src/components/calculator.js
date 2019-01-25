import React, { Component } from "react";
import './calculator.css'

class Calculator extends Component {
    state = {
        value: ''
    }
    enterValue(e) {
        const currentValue = e.currentTarget.innerText;
        const operators = ["+", "-", "/", "X"];
        switch (currentValue) {
            case "C":
                this.setState({ value: '' })
                break;
            case "+":
            case "-":
            case "X":
            case "/":
                if(operators.indexOf(this.state.value.substr(this.state.value.length - 1, 1)) !== -1){
                    this.setState({value: this.replaceAt(this.state.value.length - 1, currentValue, this.state.value) });
                }
                else{
                    if(this.state.value.match(new RegExp("[+, -, /, X]"))){
                        this.autoCalculate(this.state.value, currentValue);
                    }else{
                        this.setState({ value: this.state.value + currentValue })
                    }
                }
                break;
            case "=":
                this.getAnswer(this.state.value);
                break;
            default:
                this.setState({ value: this.state.value + currentValue })
                break;
        }
    }

    getAnswer(val){
        const operator = val.match(new RegExp("[+, -, /, X]"))[0];
        this.setState({value: this.perfomeOperation(val, operator)});
    }

    autoCalculate(val, currentValue){
        const operator = val.match(new RegExp("[+, -, /, X]"))[0];
        this.setState({value: this.perfomeOperation(val, operator)}, ()=> {
            this.setState({ value: this.state.value + currentValue });
        });
    }

    perfomeOperation(val, operator){
        switch (operator) {
            case "+":
                return parseInt(val.split(operator)[0]) + parseInt(val.split(operator)[1]);
            case "-":
                return parseInt(val.split(operator)[0]) - parseInt(val.split(operator)[1]);
            case "X":
                return parseInt(val.split(operator)[0]) * parseInt(val.split(operator)[1]);
            case "/":
                return parseInt(val.split(operator)[0]) / parseInt(val.split(operator)[1]);
        }
    }

    replaceAt(index, replacement, str) {
        return str.substr(0, index) + replacement+ str.substr(index + replacement.length);
    }

    render() {
        return (
            <div>
                <h2>Calculator</h2>
                <div className="calc-container">
                    <div className="result">
                        <p>
                            {this.state.value}
                        </p>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td onClick={(event) => { this.enterValue.bind(this)(event) }}>1</td>
                                <td onClick={(event) => { this.enterValue.bind(this)(event) }}>2</td>
                                <td onClick={(event) => { this.enterValue.bind(this)(event) }}>3</td>
                                <td onClick={(event) => { this.enterValue.bind(this)(event) }}>+</td>
                            </tr>
                            <tr>
                                <td onClick={(event) => { this.enterValue.bind(this)(event) }}>4</td>
                                <td onClick={(event) => { this.enterValue.bind(this)(event) }}>5</td>
                                <td onClick={(event) => { this.enterValue.bind(this)(event) }}>6</td>
                                <td onClick={(event) => { this.enterValue.bind(this)(event) }}>-</td>
                            </tr>
                            <tr>
                                <td onClick={(event) => { this.enterValue.bind(this)(event) }}>7</td>
                                <td onClick={(event) => { this.enterValue.bind(this)(event) }}>8</td>
                                <td onClick={(event) => { this.enterValue.bind(this)(event) }}>9</td>
                                <td onClick={(event) => { this.enterValue.bind(this)(event) }}>X</td>
                            </tr>
                            <tr>
                                <td onClick={(event) => { this.enterValue.bind(this)(event) }}>C</td>
                                <td onClick={(event) => { this.enterValue.bind(this)(event) }}>0</td>
                                <td onClick={(event) => { this.enterValue.bind(this)(event) }}>=</td>
                                <td onClick={(event) => { this.enterValue.bind(this)(event) }}>/</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default Calculator;