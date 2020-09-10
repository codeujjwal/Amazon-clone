import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDcVofQOjKfJU26JN45vZnSSBjtrG-ZFtA",
  authDomain: "clone-ujjwal.firebaseapp.com",
  databaseURL: "https://clone-ujjwal.firebaseio.com",
  projectId: "clone-ujjwal",
  storageBucket: "clone-ujjwal.appspot.com",
  messagingSenderId: "584659278846",
  appId: "1:584659278846:web:caa0796f90ee25d6b67eaf",
  measurementId: "G-KVLTNK7QX9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
