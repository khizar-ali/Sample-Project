import React from 'react'
import { connect } from 'react-redux'
import { addMovie } from '../actions'
import Input from 'material-ui/Input/Input'
import Button from 'material-ui/Button'

let AddItem = ( {dispatch} ) => {

  let title, genre;

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      dispatch(addMovie({title: title, genre: genre}))
    }}>

      <Input placeholder='Title' onChange={(e) => {

        title = e.target.value

       }}/>
      <Input placeholder='Genre' onChange={(e) => {

        genre = e.target.value

       }}/>

      <Button type='submit'>Add</Button>
    </form>
  )
}

AddItem = connect()(AddItem)

export default AddItem
