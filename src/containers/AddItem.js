import React from 'react'
import { connect } from 'react-redux'
import { addMovie } from '../actions'

let AddItem = ( {dispatch} ) => {
  return (
    <button onClick={() => {
      dispatch(addMovie('abc', 'cde'))
    }}>Add</button>
  )
}


AddItem = connect()(AddItem)

export default AddItem
