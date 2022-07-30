import React, { Component } from 'react'
import HOC from '.'

class CommentsComp extends Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <>Comments :{this.props.count}</>
        <button onClick={this.props.handleClick} >Click</button>
      </div>
    )
  }
}

const EnhancedComments = HOC(CommentsComp, 10)

export default EnhancedComments
