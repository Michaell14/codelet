// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPOgLkKuiS39orl1r57FXWyZUSV72RTds",
  authDomain: "codelet-952ab.firebaseapp.com",
  projectId: "codelet-952ab",
  storageBucket: "codelet-952ab.appspot.com",
  messagingSenderId: "1023896683150",
  appId: "1:1023896683150:web:ee10530b59d110dc48bfdf",
  measurementId: "G-C10L86B8TJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };