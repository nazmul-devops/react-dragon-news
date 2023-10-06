// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDChJZ6TM8qCjysg3gAdwo23MC6PJK17Qs",
    authDomain: "react-dragon-news-auth-80400.firebaseapp.com",
    projectId: "react-dragon-news-auth-80400",
    storageBucket: "react-dragon-news-auth-80400.appspot.com",
    messagingSenderId: "414561714816",
    appId: "1:414561714816:web:8a35f7e7699f9c53b85c65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;