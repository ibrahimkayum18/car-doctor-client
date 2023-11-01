// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRANd-8YjRsEhnkYPxniaN7Ipmdn_jguk",
  authDomain: "twitter-login-2a2cf.firebaseapp.com",
  projectId: "twitter-login-2a2cf",
  storageBucket: "twitter-login-2a2cf.appspot.com",
  messagingSenderId: "674130225323",
  appId: "1:674130225323:web:75390691d8a6416dc56fee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;