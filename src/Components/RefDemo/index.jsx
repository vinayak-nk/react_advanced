import React, { Component, createRef } from 'react'
import TestForwardRef from './forwardRef'
export default class index extends Component {
  constructor() {
    super()
    this.myRef = createRef()
    this.fwdRef = createRef()
  }

  componentDidMount() {
    this.myRef.current.focus()
    this.myRef.current.placeholder = "test...."
    console.log('ClassName is ==> ', this.myRef.current.className)
  }

  handleSubmit = () => {
    console.log(this.myRef.current.value)
  }

  render() {
    return (
      <div>
        <input type="text" className="xyz" ref={this.myRef} />
        <button onClick={this.handleSubmit}>Submit</button>
        <TestForwardRef ref={this.fwdRef}  />
      </div>
    )
  }
}
