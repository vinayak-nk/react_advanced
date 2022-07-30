import React, { forwardRef } from 'react'

const whatColor = (ref) => {
  console.log('color==', ref.current.value)
}

const TestForwardRef = forwardRef((props, ref) => {
  return (
    <div>
      <input type="color" name="color" id="color" ref={ref} onChange={() => whatColor(ref)} />
    </div>
  )
})

export default TestForwardRef
