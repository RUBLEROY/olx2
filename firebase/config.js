import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBADz55j2DhutfvtLgoQ9bDWHJZVcUaoW4",
    authDomain: "olxclone-1a73e.firebaseapp.com",
    projectId: "olxclone-1a73e",
    storageBucket: "olxclone-1a73e.appspot.com",
    messagingSenderId: "717096978310",
    appId: "1:717096978310:web:102c32dcd3505cb0970e07",
    measurementId: "G-N7KH71TTB8"
  };

export default  firebase.initializeApp(firebaseConfig)