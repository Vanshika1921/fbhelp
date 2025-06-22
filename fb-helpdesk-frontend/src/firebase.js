// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCaj8N_6ewQmzIs6-3GOSUM_7t9OHJDHP8",
  authDomain: "fbhelpdesk-9fc33.firebaseapp.com",
  projectId: "fbhelpdesk-9fc33",
  storageBucket: "fbhelpdesk-9fc33.appspot.com", // fixed typo here
  messagingSenderId: "593158200767",
  appId: "1:593158200767:web:178daaf4a2fefb7bff550a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth and Firestore for use in your components
export const auth = getAuth(app);
export const db = getFirestore(app);
