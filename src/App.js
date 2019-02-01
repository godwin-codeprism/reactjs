import React, { Component } from 'react';
import './App.css';
import Account from "./components/Account"
import Calculator from "./components/calculator"
import Library from './components/library';
import MoviesSearch from './components/MovieSearch';
import Album from './components/Album/Album';
class App extends Component {
  state = { value: 0 }
  increase() {
    this.setState({ value: this.state.value + 1 })
  }
  decrease() {
    if (this.state.value > 0) {
      this.setState({ value: this.state.value - 1 })
    }
  }
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>{this.state.value}</p>
        <button onClick={this.increase.bind(this)}> increment</button>
        <button onClick={this.decrease.bind(this)}>Decrement</button>
        <hr />
        <h1>Exerices 1</h1>
        <Account></Account>
        <hr />
        <h1>Excersice 2</h1>
        <Calculator/>
        <hr/>
        <h1>Exercise 4</h1>
        <Library/>
        <hr/>
        <h1>Exercise 6</h1>
        <MoviesSearch/>
        <hr/>
        <h1>Exercise 8</h1>
        <Album/>
      </div>
    )
  }
}
export default App;
