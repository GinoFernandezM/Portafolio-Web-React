import SignIn from './SignIn'
import LogOut from './LogOut';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import Login from './Login';

const User = () => {
    const [user] = useAuthState(auth);

    const photo = user ? user.photoURL : "/userImage.png";
    const name = user ? user.displayName : "Name User";
    return ( 
        <div className='right-side'>
            <h1><i className="fa-solid fa-cat"></i>QuickChat</h1>
            <article className='card-user'>
                <img src={photo} alt="user default" referrerPolicy='no-referrer'/>
                <p>{name}</p>
                { user ? <LogOut/> : <SignIn/> }
            </article>
        </div>
    );
}
 
export default User;