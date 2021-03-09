import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBfqm80t2u430iziYO1trvf9HZbKl1UQXs",
  authDomain: "slack-clone-f73b4.firebaseapp.com",
  projectId: "slack-clone-f73b4",
  storageBucket: "slack-clone-f73b4.appspot.com",
  messagingSenderId: "615779091489",
  appId: "1:615779091489:web:96a625b85b0327ebe10f60",
  measurementId: "G-YNCL940Q73",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
