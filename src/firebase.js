import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyD__POrtDEBnttA0UbFOdx6qs-7HgP-19w',
  authDomain: 'clone-58ad4.firebaseapp.com',
  projectId: 'clone-58ad4',
  storageBucket: 'clone-58ad4.appspot.com',
  messagingSenderId: '221982758363',
  appId: '1:221982758363:web:08d4f6f7f70b86b61783fe',
  measurementId: 'G-PYK59QTH48',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
