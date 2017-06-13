import React from 'react'

const Item = ({ title, genre }) => {
  return (
    <div>
      <span>{title}</span>,
      <span>{genre}</span>
    </div>
  )
}

export default Item
