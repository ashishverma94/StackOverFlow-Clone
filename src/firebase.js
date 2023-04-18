// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyDiGx2ZhzRLW8j4iN_jVDpR54SLJVnQSeM",
  authDomain: "stackoverflow-9589f.firebaseapp.com",
  projectId: "stackoverflow-9589f",
  storageBucket: "stackoverflow-9589f.appspot.com",
  messagingSenderId: "898131687388",
  appId: "1:898131687388:web:44df8c7b02e30154090119",
  measurementId: "G-728CE8T8C6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth() ;
export const provider = new GoogleAuthProvider() ;
