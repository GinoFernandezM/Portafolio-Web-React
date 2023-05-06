import React, { useState } from 'react'

  const FormAddSubs = ({setType, setPrice, type, price, setSubs, subs, editId, setEditId, spent, setSpent, count}) => {
  const [error, setError] = useState(false)
  const [errorSpent, setErrorSpent] = useState(false)

  const handleSubs = (e) => {
    e.preventDefault()

    if(price === "" || type==="" || Number(price)<=0){
      setError(true)
      //console.log("error")
      return
    }
    if(count - spent < price){
      setErrorSpent(true)
      return
    }

    setError(false)
    setErrorSpent(false)

    if(editId != ''){
      setEditId("")
      const newSubs = subs.map((item)=>{
        if(editId === item.id){
          item.type = type
          item.price = price
        }
        return item
      })
      setSubs(newSubs)
    }else{
      const data = {
        type : type,
        price : price,
        id: Date.now()
      }
      setSubs([...subs, data])
    }
    
    setPrice("")
    setType("")
    //console.log(subs)
  }

  return (
    <div className='add-subscription'>
      <h3>Agregar Suscripciones</h3>
      <form onSubmit={handleSubs}>
        <p>Servicio</p>
        <select name="" id="" onChange={(e)=>{setType(e.target.value)}} value={type}>
            <option value="">-- Elegir --</option>
            <option value="netflix">Netflix</option>
            <option value="disneyPlus">Disney Plus</option>
            <option value="hboMax">HBO Max</option>
            <option value="starPlus">Star Plus</option>
            <option value="primeVideo">Prime Video</option>
            <option value="appleTV">Apple TV</option>
            <option value="spotify">Spotify</option>
        </select>
        <p>Cantidad</p>
        <input type="number" placeholder='20$' onChange={e=>setPrice(e.target.value)} value={price}/>

        {editId===""?<input type="submit" value="Agregar" />
                    :<input type="submit" value="Guardar"/> }
        
      </form>

      {error ? <p className='error'>Campos invalidos -- Rellene correctamente</p>: null}

      {errorSpent ? <p className='error'>No tienes suficiente presupuesto</p>: null}
     
    </div>
  )
}

export default FormAddSubs
