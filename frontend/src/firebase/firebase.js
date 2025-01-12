// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDiiB-R2BUuwix9EUBDAIifyH0C3vq41EU",
    authDomain: "internaura-49f2b.firebaseapp.com",
    projectId: "internaura-49f2b",
    storageBucket: "internaura-49f2b.firebasestorage.app",
    messagingSenderId: "1076605043052",
    appId: "1:1076605043052:web:4279c550857f3d897ab349",
    measurementId: "G-6338BXGMY2"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider}