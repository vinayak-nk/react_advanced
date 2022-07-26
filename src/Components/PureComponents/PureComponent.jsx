import React, { PureComponent } from 'react'

export default class pureComponent extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleIncerementCount = () => {
    this.setState({ count: 1 })
  }
  
  render() {
    console.log("RENDER: PureComponent IncerementCount")
    return (
      <div>
        <h1>PureComponent</h1>
        <br />
        <div>{`Count:  ${this.state.count}`}</div>
        <button onClick={this.handleIncerementCount}>Increment</button>
      </div>
    )
    }
}
