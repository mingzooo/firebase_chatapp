import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAEqoY1owwwhvHoy5zTVZ3sJWryRtY4KSA",
  authDomain: "fb-chatapp1999.firebaseapp.com",
  projectId: "fb-chatapp1999",
  storageBucket: "fb-chatapp1999.appspot.com",
  messagingSenderId: "23101647682",
  appId: "1:23101647682:web:1885de1ef6cc789324f6db",
  measurementId: "G-DT4X9WTE43"
});

const db = firebaseApp.firestore();
export { db, firebaseApp, firebase };
