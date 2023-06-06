import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { FaGoogle } from "react-icons/fa";

const SignIn = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  }

  return (
    <>
      <button 
        className='btn-login' 
        onClick={googleSignIn}
      >
        <FaGoogle/>
        Sign in with Google
      </button>
    </>
  );
}
 
export default SignIn;