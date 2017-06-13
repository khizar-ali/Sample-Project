import React from 'react'
import Item from './Item'

const ItemList = ({ items, onToggleProp }) => {
  return (
    <ul>
      {items.map(item =>
        <Item
          key={item.id}
          {...item}
          onClick={() => { onToggleProp(item.id, 'expanded')}}
          onEditClick={() => { onToggleProp(item.id, 'edit') }}>
        </Item>
      )}
    </ul>
  )
}

export default ItemList
