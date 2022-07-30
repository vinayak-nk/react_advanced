import React from 'react'

function ErrorDemo(props) {
  if (props.name !== 'test') {
    throw new Error("There is an Error!")
  }

  return (
    <div>
      Error Demo :  {props.name}
    </div>
  )
}

export default ErrorDemo