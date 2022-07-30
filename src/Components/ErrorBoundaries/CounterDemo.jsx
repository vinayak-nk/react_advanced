import React, { Component } from 'react'

export default class CounterDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleIncerementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 }
    })
  }
    
  render() {
    if (this.state.count > 5) {
      throw new Error("Count > 5")
    }
    return (
      <div>
        <div>{`Count:  ${this.state.count}`}</div>
        <button onClick={this.handleIncerementCount}>Increment</button>
      </div>
    )
    }
}
