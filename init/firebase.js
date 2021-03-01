import firebase from 'firebase'
import 'firebase/firebase-firestore';
var firebaseConfig = {
    apiKey: "AIzaSyClWeRxclp0vdP0JpI4aJ21YRWPbN_9ST8",
    authDomain: "food-on-wheels-6c8dd.firebaseapp.com",
    projectId: "food-on-wheels-6c8dd",
    storageBucket: "food-on-wheels-6c8dd.appspot.com",
    messagingSenderId: "365911383078",
    appId: "1:365911383078:web:f9f273445f76350aa49ae7"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }
  
export const auth=firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const db=firebase.firestore();