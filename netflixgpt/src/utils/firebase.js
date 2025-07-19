// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAef6CH5ygl9JQ25KxM7ospxY3858YcUfc",
  authDomain: "netflixgpt1-6f1f7.firebaseapp.com",
  projectId: "netflixgpt1-6f1f7",
  storageBucket: "netflixgpt1-6f1f7.firebasestorage.app",
  messagingSenderId: "583199366253",
  appId: "1:583199366253:web:a5c177a6ad3e602be97364",
  measurementId: "G-R5GJRJFWVT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);