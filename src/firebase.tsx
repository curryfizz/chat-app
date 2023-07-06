// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCxoeG0KC5oWN1DsYiJhhknCqYaSroXwA",
  authDomain: "hackachat-cf508.firebaseapp.com",
  projectId: "hackachat-cf508",
  storageBucket: "hackachat-cf508.appspot.com",
  messagingSenderId: "1003983396118",
  appId: "1:1003983396118:web:76f8dddca17e2e07c20437"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);