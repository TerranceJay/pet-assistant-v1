import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD7ilgfWII-PKOAS5C0rCN7A-lN0ceonbo",
  authDomain: "petcareapp-a71a4.firebaseapp.com",
  projectId: "petcareapp-a71a4",
  storageBucket: "petcareapp-a71a4.appspot.com",
  messagingSenderId: "382554354497",
  appId: "1:382554354497:web:4b9b8138eb916c66e027c0",
  measurementId: "G-H04RLEJNG5"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export {db};