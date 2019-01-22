import React, { Component } from "react"
import "./Account.css"

class Account extends Component {
  state = {
    accountBalance: 200
  }
  Withdraw(){
    if(this.state.accountBalance>0)
    this.setState({ accountBalance:this.state.accountBalance -10})
  }
deposit(){

  this.setState({ accountBalance:this.state.accountBalance +10})
}

  render() {
    return (
      <div className="Rectangle">

        <h2 style={{ textAlign: "center", paddingTop: "20px" }}>
          My account
      </h2>
        <h3 style={{ textAlign: "center", paddingTop: "20px", fontSize:'25px' }}>
          ${this.state.accountBalance}
        </h3>
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button className="ex1-btn withdraw" onClick={this.Withdraw.bind(this)}>Withdraw $10</button>
          <button className="ex1-btn deposit" onClick={this.deposit.bind(this)}>Deposit $10</button>
        </div>
      </div>
    )
  }
}

export default Account;