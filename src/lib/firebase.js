// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu46LUBXZPm9K-1mOwYsJvc3Fh1IGLbe4",
  authDomain: "arc-22.firebaseapp.com",
  projectId: "arc-22",
  storageBucket: "arc-22.appspot.com",
  messagingSenderId: "621954006828",
  appId: "1:621954006828:web:c4e9adda5beaa1524bf689"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize auth
export const auth = getAuth(app);