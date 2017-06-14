import React from 'react'
import Paper from 'material-ui/Paper'
import Image from './Image'

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

const ItemCard = ({title, genre, edit, onEditClick}) => {

  return (
    <Paper style={cardStyle}>
      <div style={{overflowY: 'auto', overflowX: 'hidden', height: 180}}>
        <div style={reelItemStyle}><Image /></div>
        <div style={reelItemStyle}><Image /></div>
        <div style={reelItemStyle}><Image /></div>
        <div style={reelItemStyle}><Image /></div>
      </div>

      <span>{title}</span>
      <span style={{background: edit ? 'orange' : ''}}>{genre}</span>
      <button onClick={onEditClick}>Edit</button>
    </Paper>
  )
}

export default ItemCard
