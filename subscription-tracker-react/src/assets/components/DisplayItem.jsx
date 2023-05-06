import React from 'react'
import SingleItem from './SingleItem'

const DisplayItem = ({subs,eliminarItem, editItem, spent, setSpent}) => {
  return (
    <div>
      <h2>Subscripciones</h2>
      {
        subs.map(item => (<SingleItem
          key = {item.id}
          type = {item.type}
          price = {item.price}
          id = {item.id}
          eliminarItem = {eliminarItem}  
          editItem = {editItem}
          spent = {spent}
          setSpent={setSpent}
        />))
      }
    </div>
  )
}

export default DisplayItem
