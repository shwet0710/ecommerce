import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBW3wZEWQ9EizxgZwYwd1vd3W2mwekPRPs",
    authDomain: "edukaan-4c2c4.firebaseapp.com",
    projectId: "edukaan-4c2c4",
    storageBucket: "edukaan-4c2c4.appspot.com",
    messagingSenderId: "1039878669876",
    appId: "1:1039878669876:web:6796c6317e32cf38c9ac61",
    measurementId: "G-K4C2ZD5RP3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };