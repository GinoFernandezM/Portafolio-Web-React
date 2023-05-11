import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAe6GaduECQ4KAC3FyRb7Nq-CPXzTB-Toc",
    authDomain: "chat-app-react-c7476.firebaseapp.com",
    projectId: "chat-app-react-c7476",
    storageBucket: "chat-app-react-c7476.appspot.com",
    messagingSenderId: "1074975347317",
    appId: "1:1074975347317:web:e24b0fa21564885f5d9e3c"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  export const db = getFirestore(app);
  