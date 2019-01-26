import React, { Component } from "react";
import './calculator.css'

class Calculator extends Component {
    state = {
        value: '',
        clickedBtn: null
    }
    timeout = null;
    componentDidMount() {
        document.addEventListener('keydown', this.onKeyPress.bind(this));
        document.addEventListener('keyup', this.onKeyUp.bind(this));
    }
    onKeyUp() {
        if (this.timeout === null) {
            this.timeout = setTimeout(() => {
                this.setState({ clickedBtn: null });
            }, 250)
        } else {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.setState({ clickedBtn: null });
            }, 250)
        }
    }
    onKeyPress(e) {
        const numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
            oprArr = ["/", "*", "-", "+"],
            operators = ["+", "-", "/", "X"];
        if (numArr.indexOf(e.key) !== -1) {
            this.setState({ value: this.state.value + e.key, clickedBtn: e.key });
        }
        if (oprArr.indexOf(e.key) !== -1) {
            if (operators.indexOf(this.state.value.substr(this.state.value.length - 1, 1)) !== -1) {
                this.setState({ value: this.replaceAt(this.state.value.length - 1, e.key.replace('*', 'X'), this.state.value), clickedBtn: e.key });
            }
            else {
                if (this.state.value.match(new RegExp("[+-/X]"))) {
                    this.autoCalculate(this.state.value, e.key.replace('*', 'X'));
                    this.setState({ clickedBtn: e.key });
                } else {
                    this.setState({ value: this.state.value + e.key.replace('*', 'X'), clickedBtn: e.key })
                }
            }
        }
        if (e.key === 'Enter') {
            this.setState({ clickedBtn: e.key });
            this.getAnswer(this.state.value);
        }
        if (e.key === 'Escape') {
            this.setState({ clickedBtn: e.key });
            this.setState({ value: '' });
        }
        if (e.key === 'Backspace') {
            this.setState({ clickedBtn: e.key });
            this.setState({ value: this.state.value.slice(0, this.state.value.length - 1) });
        }
    }
    enterValue(e) {
        const currentValue = e.currentTarget.innerText;
        const operators = ["+", "-", "/", "X"];
        switch (currentValue) {
            case "C":
                this.setState({ value: '' });
                break;
            case "+":
            case "-":
            case "X":
            case "/":
                if (operators.indexOf(this.state.value.substr(this.state.value.length - 1, 1)) !== -1) {
                    this.setState({ value: this.replaceAt(this.state.value.length - 1, currentValue, this.state.value) });
                }
                else {
                    if (this.state.value.match(new RegExp("[+-/X]"))) {
                        this.autoCalculate(this.state.value, currentValue);
                    } else {
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

    getAnswer(val) {
        const operator = val.match(new RegExp("[+-/X]"));
        if (operator) {
            this.setState({ value: this.perfomeOperation(val, operator[0]).toString() });
        }
    }

    autoCalculate(val, currentValue) {
        const operator = val.match(new RegExp("[+-/X]"));
        if (operator) {
            this.setState({ value: this.perfomeOperation(val, operator[0]) }, () => {
                this.setState({ value: this.state.value + currentValue });
            });
        }
    }

    perfomeOperation(val, operator) {
        const valArr = val.split(operator),
            leftHandSide = parseInt(valArr[0] ? valArr[0] : 0),
            rightHandSide = parseInt(valArr[1] ? valArr[1] : 0);
        switch (operator) {
            case "+":
                return leftHandSide + rightHandSide;
            case "-":
                return leftHandSide - rightHandSide;
            case "X":
                return leftHandSide * rightHandSide;
            case "/":
                return leftHandSide / rightHandSide;
            default:
                break;
        }
    }

    replaceAt(index, replacement, str) {
        return str.substr(0, index) + replacement + str.substr(index + replacement.length);
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
                                <td className={this.state.clickedBtn === '1' ? 'active' : null} onClick={(event) => { this.enterValue.bind(this)(event) }}>1</td>
                                <td className={this.state.clickedBtn === '2' ? 'active' : null} onClick={(event) => { this.enterValue.bind(this)(event) }}>2</td>
                                <td className={this.state.clickedBtn === '3' ? 'active' : null} onClick={(event) => { this.enterValue.bind(this)(event) }}>3</td>
                                <td className={this.state.clickedBtn === '+' ? 'active' : null} onClick={(event) => { this.enterValue.bind(this)(event) }}>+</td>
                            </tr>
                            <tr>
                                <td className={this.state.clickedBtn === '4' ? 'active' : null} onClick={(event) => { this.enterValue.bind(this)(event) }}>4</td>
                                <td className={this.state.clickedBtn === '5' ? 'active' : null} onClick={(event) => { this.enterValue.bind(this)(event) }}>5</td>
                                <td className={this.state.clickedBtn === '6' ? 'active' : null} onClick={(event) => { this.enterValue.bind(this)(event) }}>6</td>
                                <td className={this.state.clickedBtn === '-' ? 'active' : null} onClick={(event) => { this.enterValue.bind(this)(event) }}>-</td>
                            </tr>
                            <tr>
                                <td className={this.state.clickedBtn === '7' ? 'active' : null} onClick={(event) => { this.enterValue.bind(this)(event) }}>7</td>
                                <td className={this.state.clickedBtn === '8' ? 'active' : null} onClick={(event) => { this.enterValue.bind(this)(event) }}>8</td>
                                <td className={this.state.clickedBtn === '9' ? 'active' : null} onClick={(event) => { this.enterValue.bind(this)(event) }}>9</td>
                                <td className={this.state.clickedBtn === '*' ? 'active' : null} onClick={(event) => { this.enterValue.bind(this)(event) }}>X</td>
                            </tr>
                            <tr>
                                <td className={this.state.clickedBtn === 'Escape' ? 'active' : null} onClick={(event) => { this.enterValue.bind(this)(event) }}>C</td>
                                <td className={this.state.clickedBtn === '0' ? 'active' : null} onClick={(event) => { this.enterValue.bind(this)(event) }}>0</td>
                                <td className={this.state.clickedBtn === 'Enter' ? 'active' : null} onClick={(event) => { this.enterValue.bind(this)(event) }}>=</td>
                                <td className={this.state.clickedBtn === '/' ? 'active' : null} onClick={(event) => { this.enterValue.bind(this)(event) }}>/</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default Calculator;