import React from 'react'
import ItemCard from './ItemCard'
import Paper from 'material-ui/Paper'
import Image from './Image'


const paperStyle = {
    paddingTop: 16,
    paddingBottom: 16,
    width: 250,
    height: 250,

    display: 'flex',
    flexDirection: 'row'
}

const Item = ({ id, title, genre, expanded, edit, onClick, onEditClick }) => {
  return (
    <li style={{listStyle: 'none', display: 'inline-block', margin: 10}}>
      <Paper elevation={6} onClick={onClick} style={paperStyle}>
        <Image />
      </Paper>
      { expanded &&
        <ItemCard
          id={id}
          title={title}
          genre={genre}
          edit={edit}
          onCloseClick={onClick}
          onEditClick={onEditClick}
        />
      }
    </li>
  )
}

export default Item
