import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase';

import { FaGoogle } from "react-icons/fa";

const Login = () => {

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider )
  }

  return (
    <button className="btn-login" onClick={googleLogin}>
      <FaGoogle/>
      Sign in with Google
    </button>
  )
}

export default Login
