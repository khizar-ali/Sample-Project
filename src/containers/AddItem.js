import React from 'react'
import { connect } from 'react-redux'
import { addMovie } from '../actions'
import Input from 'material-ui/Input/Input'
import Button from 'material-ui/Button'


const formStyle = {
  width: 400,
  margin: 'auto',
  padding: 24
}

const inputStyle = {
  display: 'block',
  padding: 12,
  boxSizing: 'border-box',
  borderWidth: 2,
  marginBottom: 12
}

let AddItem = ( {dispatch} ) => {
  let title, genre, files = [];

  return (
    <form style={formStyle} onSubmit={(e) => {
      e.preventDefault();
      dispatch(addMovie({title, genre, files}))

      title = genre = '';
      files = [];
    }}>

      <Input style={inputStyle} placeholder='Title' onChange={(e) => {

        title = e.target.value

       }}/>
      <Input style={inputStyle} placeholder='Genre' onChange={(e) => {

        genre = e.target.value

       }}/>

       {<input style={inputStyle} type="file" multiple='true' onChange={(e) => {
           let fileArr = e.target.files;
           for (let i = 0; i < fileArr.length; i++) {
             var reader = new FileReader();
               reader.readAsDataURL(fileArr[i]);
               reader.onload = (e) => {
                 files.push(fileArr[i].name)
                 localStorage.setItem(fileArr[i].name, e.target.result)
               }
           }
         }}/>}


      <Button raised color="primary" type='submit'>Add</Button>

      <Button onClick={() => {
        localStorage.clear();
      }}>Clear</Button>

    </form>
  )
}

AddItem = connect()(AddItem)

export default AddItem
