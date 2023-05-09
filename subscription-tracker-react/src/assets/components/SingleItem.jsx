import React from 'react'
import {moneyFormat} from "../../helpers"


const SingleItem = ({type, price, id, eliminarItem, editItem, spent, setSpent}) => {
  const urlImage = `/${type}.png`

  const handleDelete = e => {
    const answer = window.confirm(`Seguro que deseas borrar tu subscripcion de ${type}`)
    e.preventDefault()
    if(answer)
      eliminarItem(id)
  }

  const handleEdit = e => {
    e.preventDefault()
    setSpent(spent-price)
    editItem(id)
  }

  return (
    <div className='single-item'>
      <img src={urlImage} alt={type} />
      <h3>precio: {moneyFormat(Number(price))}</h3>
      <a href="" className='delete' onClick={handleDelete}>Borrar</a>
      <a href="" className='edit' onClick={handleEdit}>Editar</a>
    </div>
  )
}

export default SingleItem
