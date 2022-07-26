import React from 'react'
import NormalComponent from './NormalComponent'
import PureComponent from './PureComponent'

export default function index() {
  return (
    <div>
      <NormalComponent />
      <PureComponent />
    </div>
  )
}
