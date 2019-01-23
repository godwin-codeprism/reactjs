import React, { Component } from "react";
import './calculator.css'

class Calculator extends Component {
    state = {
        value: ''
    }
    enterValue(e) {
        const currentValue = e.currentTarget.innerText;
        switch (currentValue) {
            case "C":
                this.setState({ value: '' })
                break;
            case "=":
                this.setState({ value: parseInt(this.state.value.split("+")[0]) + parseInt(this.state.value.split("+")[1]) })
                break;
            default:
                this.setState({ value: this.state.value + currentValue })
                break;
        }

        // if(currentValue == "C"){
        //     this.setState({value: ''})
        // }
        // else{
        //     this.setState({value: this.state.value + currentValue})
        // }

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