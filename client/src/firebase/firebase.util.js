// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjW-B78_aa2ikHoSmgfFsGa-q5avml5qY",
  authDomain: "devops-57068.firebaseapp.com",
  projectId: "devops-57068",
  storageBucket: "devops-57068.appspot.com",
  messagingSenderId: "424869232317",
  appId: "1:424869232317:web:003413eea11eb8419681d4",
  measurementId: "G-XK21304B6Z"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'}) ;
export const signWithGoogle = () =>{
    auth.signInWithPopup(provider);
}