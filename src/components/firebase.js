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

// Get a reference to the Firestore database
const db = firebase.firestore();

// petProfileService.js

// Function to create a new pet profile
export function createPetProfile(petData) {
  // Here, you can implement the logic to save the pet profile to the database
  // You can use your chosen database or API for this purpose
  
  // For demonstration purposes, let's log the pet data to the console
  console.log('Creating pet profile:', petData);
  
  // Return a promise to mimic an asynchronous operation
  return new Promise((resolve, reject) => {
    // Simulate a delay of 1 second before resolving the promise
    setTimeout(() => {
      resolve(); // Resolve the promise to indicate successful profile creation
    }, 1000);
  });
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export {db};