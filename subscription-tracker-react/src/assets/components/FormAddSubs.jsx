import React from 'react'

const FormAddSubs = () => {
  return (
    <div className='add-subscription'>
      <h3>Agregar Suscripciones</h3>
      <form action="">
        <p>Servicio</p>
        <select name="" id="">
            <option value="">-- Elegir --</option>
            <option value="netflix">Netflix</option>
            <option value="disneyPlus">Disney Plus</option>
            <option value="hboMax">HBO Max</option>
            <option value="starPlus">Star Plus</option>
            <option value="primeVideo">Prime Video</option>
            <option value="appleTV">Apple TV</option>
            <option value="spotify">Spotify</option>
        </select>
      </form>
    </div>
  )
}

export default FormAddSubs
