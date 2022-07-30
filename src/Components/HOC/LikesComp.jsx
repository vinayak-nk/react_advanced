import React, { Component } from 'react'
import HOC from '.'

class LikesComp extends Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <>Likes by {this.props.userName} :{this.props.count}</>
        <button onClick={this.props.handleClick} >Click</button>
      </div>
    )
  }
}


const EnhancedLikes = HOC(LikesComp, 5)

export default EnhancedLikes
