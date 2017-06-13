import React from 'react'

const ItemModal = ({title, genre, edit, onEditClick}) => {
  return (
    <div>

      <span>{title}</span>
      <span style={{background: edit ? 'orange' : ''}}>{genre}</span>

      <button onClick={onEditClick}>Edit</button>
    </div>
  )
}

export default ItemModal
