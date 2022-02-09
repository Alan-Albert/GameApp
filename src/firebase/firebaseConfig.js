// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4TsJeH0A0FT5V3yUktwTg19iW4N0DT9E",
  authDomain: "game-app-3206c.firebaseapp.com",
  projectId: "game-app-3206c",
  storageBucket: "game-app-3206c.appspot.com",
  messagingSenderId: "684235372727",
  appId: "1:684235372727:web:791eb8070132429145b532"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}