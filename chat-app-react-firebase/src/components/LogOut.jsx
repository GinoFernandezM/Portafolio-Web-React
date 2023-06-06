import { signOut } from 'firebase/auth'
import React from 'react'
import { FaGoogle } from 'react-icons/fa'
import { auth } from '../firebase'

const LogOut = () => {
  const logOut = () => {
    signOut(auth)
  }

  return (
    <button className='btn-login btn-logout'
            onClick={logOut}>
      <FaGoogle/>
      logout
    </button>
  )
}

export default LogOut
