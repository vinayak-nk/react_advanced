import React, { Component } from 'react'

export default class ErrorBoundaries extends Component {
  constructor() {
    super()
    this.state = {
      hasError: false,
      error: "",
      errorInfo: "",
    }
  }

  static getDerivedStateFromError(error) {
    console.log("error getDerivedStateFromError=", error)
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // console.log('error', error)
    // console.log('errorInfo', errorInfo)
    this.setState({ error, errorInfo })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <div style={{ display: 'flex', alignItems: 'center' }}><h5>Error :</h5> {this.state.error.toString()}</div>
          <p><h5>Error Info :</h5> {this.state.errorInfo.componentStack}</p>
        </div>
      )
    }

    return this.props.children
  }
}
