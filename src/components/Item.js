import React from 'react'
import ItemCard from './ItemCard'
import Paper from 'material-ui/Paper'
import Image from './Image'

const paperStyle = {
    width: 250,
    height: 250,
    display: 'flex',
    flexDirection: 'row'
}

const Item = ({ id, title, genre, files, expanded, edit, onClick, onEditClick }) => {
  return (
    <li style={{listStyle: 'none', display: 'inline-block', margin: 10}}>
      <Paper elevation={6} onClick={onClick} style={paperStyle}>
        <Image file={files[0]} />
      </Paper>
      { expanded &&
        <ItemCard
          id={id}
          title={title}
          genre={genre}
          files={files}
          edit={edit}
          onCloseClick={onClick}
          onEditClick={onEditClick}
        />
      }
    </li>
  )
}

export default Item
