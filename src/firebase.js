import firebase from 'firebase'
// const firebase = require("firebase");
// Required for side-effects
// require("firebase/firestore");

export const firebaseConfig = {
    apiKey: "AIzaSyAiGcDBRz743Gt25dxJcVQqUvhHfkXLWUU",
    authDomain: "scorebase-lpc.firebaseapp.com",
    projectId: "scorebase-lpc",
    storageBucket: "scorebase-lpc.appspot.com",
    messagingSenderId: "89559192355",
    appId: "1:89559192355:web:6877b206baddc51bd57296",
    measurementId: "G-SEVQR8843Z"
}

// Initialize Cloud Firestore through Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();