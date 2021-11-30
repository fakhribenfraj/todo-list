// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU7kxzNKmzG-Y8A6gqK0MR8MkN4G5JfXI",
  authDomain: "todoist-6fef2.firebaseapp.com",
  databaseURL:
    "https://todoist-6fef2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todoist-6fef2",
  storageBucket: "todoist-6fef2.appspot.com",
  messagingSenderId: "278032034858",
  appId: "1:278032034858:web:e46826006854c0b78f6753",
  measurementId: "G-VD7HXQWNHV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const signIn = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      console.log(userCredential.user);
      return true
      // ...
    })
    .catch((error) => {
      return false;
      alert(error.message);
    });
};
const signUp = (email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      console.log(userCredential.user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};
export const auth = {
  signIn,
  signUp,
};
// export const db = firebase.firestore();
