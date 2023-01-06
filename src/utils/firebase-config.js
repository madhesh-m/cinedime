// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsKLsfNSbvtj74UcghvKUsSNz_v17KWco",
  authDomain: "netflix-clone-2ff3f.firebaseapp.com",
  projectId: "netflix-clone-2ff3f",
  storageBucket: "netflix-clone-2ff3f.appspot.com",
  messagingSenderId: "921890705812",
  appId: "1:921890705812:web:830a9ab8a20504e92dff81",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
