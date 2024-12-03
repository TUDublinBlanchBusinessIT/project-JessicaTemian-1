import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN8H3mxEaD_lFA935MAMB2KvSjHiHGpl0",
  authDomain: "dreamysleep-3aa2e.firebaseapp.com",
  database:"https://testfb8-a772e.firebaseapp.com",  // <-- Correct URL for Realtime Database
  projectId: "dreamysleep-3aa2e",
  storageBucket: "dreamysleep-3aa2e.firebasestorage.app",
  messagingSenderId: "8598666679162",
  appId: "1:859866667916:web:a100cd050603e0236778c3"
};


let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = firebase.database();  
const auth = firebase.auth();  

export { auth, db }; 