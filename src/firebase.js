import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB5uOw0YoqYb8aAAhcx44Fk8-hYRtRTKMM",
    authDomain: "clone-468a0.firebaseapp.com",
    databaseURL: "https://clone-468a0.firebaseio.com",
    projectId: "clone-468a0",
    storageBucket: "clone-468a0.appspot.com",
    messagingSenderId: "1063337168974",
    appId: "1:1063337168974:web:f7ca651dd18d3ab5d4731f",
    measurementId: "G-GMNK87DP9P"
});

const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth};