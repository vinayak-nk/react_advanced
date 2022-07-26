import React, { Component } from 'react'

export default class NormalComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleIncerementCount = () => {
    this.setState({ count: 0 })
  }
  
  
  render() {
    console.log("RENDER: NormalComponent IncerementCount")
    return (
      <div>
        <h1>NormalComponent</h1>
        <br />
        <div>{`Count:  ${this.state.count}`}</div>
        <button onClick={this.handleIncerementCount}>Increment</button>
      </div>
    )
    }
}
