import React from 'react'
import ItemModal from './ItemModal'

const Item = ({ title, genre, expanded, edit, onClick, onEditClick }) => {
  return (
    <div>
      <span onClick={onClick}>{title}</span>

      { expanded &&
        <ItemModal
          title={title}
          genre={genre}
          edit={edit}
          onEditClick={onEditClick}
        />
      }
    </div>
  )
}

export default Item
