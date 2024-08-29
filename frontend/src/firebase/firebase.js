// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCziD2GcS1oGreEdXtWlT4ULnA7_ywqArs",
  authDomain: "myneta-99ce3.firebaseapp.com",
  projectId: "myneta-99ce3",
  storageBucket: "myneta-99ce3.appspot.com",
  messagingSenderId: "826343977452",
  appId: "1:826343977452:web:5cdfa073e7642488a050c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};