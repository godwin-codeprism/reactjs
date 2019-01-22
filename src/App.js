import React, { Component } from 'react';
import './App.css';
import Account from "./components/Account"
class App extends Component {
  state = { value: 0 }


  increase() {



  this.setState({ value: this.state.value + 1 })



  }
  decrease() {

if(this.state.value>0){


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
        <hr/>
        <h1>Exerices 1</h1>
        <Account></Account>
      </div>
    )
  }
}

export default App;
