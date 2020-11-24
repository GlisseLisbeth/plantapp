import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDE1u3F-LsVZGwJZOmzrmpmUqMPI4T9UtY",
  authDomain: "dbplant-d625d.firebaseapp.com",
  databaseURL: "https://dbplant-d625d.firebaseio.com",
  projectId: "dbplant-d625d",
  storageBucket: "dbplant-d625d.appspot.com",
  messagingSenderId: "855193852221",
  appId: "1:855193852221:web:21f910351e634741384d54",
  measurementId: "G-SVXZRCLK0C"
};
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
 
export {
    db,
    googleAuthProvider,
    facebookAuthProvider,
    firebase
}