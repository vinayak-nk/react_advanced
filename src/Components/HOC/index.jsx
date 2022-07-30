import React, { Component } from 'react'


const HOC = (OriginalComponent, data) => { 
  console.log('data', data)
  return class index extends Component {
    constructor() {
      super()
      this.state = {
        count: data,
        userName: JSON.stringify(localStorage.getItem('userName'))
      }
    }

    handleClick = () => {
      this.setState({ count: this.state.count + 1 })
    }

    render() {
      return (
        <div style={{ display: 'flex' }}>
          <span>HOC example :</span>
          <OriginalComponent
            count={this.state.count}
            handleClick={this.handleClick}
            userName={this.state.userName}
          />
        </div>
      )
    }
  }
}

export default HOC