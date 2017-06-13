import React from 'react'
import { connect } from 'react-redux'
import { addMovie } from '../actions'
import RaisedButton from 'material-ui/RaisedButton'

let AddItem = ( {dispatch} ) => {
  let title, genre;

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      dispatch(addMovie({title: title.value, genre: genre.value}))
    }}>

      <input ref={ (node) => {
        title = node
      }}/>
      <input ref={ (node) => {
        genre = node
      }}/>

      <RaisedButton type='submit'>Add</RaisedButton>
    </form>
  )
}

AddItem = connect()(AddItem)

export default AddItem
