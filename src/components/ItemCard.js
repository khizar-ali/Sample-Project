import React from 'react'
import Paper from 'material-ui/Paper'
import Image from './Image'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Input from 'material-ui/Input/Input'


import { connect } from 'react-redux'
import { updateMovie } from '../actions'
import { deleteMovie } from '../actions'

const cardStyle = {
  maxWidth: 698,
  height: 400,
  position: 'fixed',
  top: 150,
  left: 40,
  right: 40,
  margin: 'auto'
}

const reelItemStyle = {
  width: 150,
  height: 150,
  float: 'left',
  margin: 12,
  display: 'inline'
}

const paperStyle = {
  padding: 24
}

const footerStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: 12,
  textAlign: 'right'
}

let ItemCard = ({id, title, genre, files, edit, onCloseClick, onEditClick, dispatch}) => {
  let etitle, egenre;

  return (
    <Paper style={cardStyle}>

      <div style={{overflowY: 'auto', overflowX: 'hidden', height: 180}}>
        {files.map((file) => {
          return <div style={reelItemStyle}><Image file={file}/></div>
        })}
      </div>

      {!edit && <Paper elevation={0} style={paperStyle}>
        <Typography type="title" >Title: {title}</Typography>
        <Typography >Genre: {genre}</Typography>
      </Paper>}

      {edit && <Paper elevation={0} style={paperStyle}>
        <Input placeholder='Title' onChange={(e) => {
          etitle = e.target.value
         }}/>
        <Input placeholder='Genre' onChange={(e) => {
          egenre = e.target.value
         }}/>
      </Paper>}

      <Paper elevation={0} style={footerStyle}>
        {!edit && <Button onClick={onEditClick}>Edit</Button>}

        {edit && <Button onClick={() => {
          dispatch(updateMovie(id, {title: etitle, genre: egenre}))
        }}>Update</Button>}

        <Button onClick={onCloseClick}>Close</Button>
        <Button onClick={() => {
          dispatch(deleteMovie(id))
        }}>Delete</Button>
      </Paper>
    </Paper>
  )
}

ItemCard = connect()(ItemCard)

export default ItemCard
