// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyBAAjotrEck7xDi13wv4NkJ5sMjwjD2N4E",
    authDomain: "kazhuga-contact-us.firebaseapp.com",
    databaseURL: "https://kazhuga-contact-us.firebaseio.com",
    projectId: "kazhuga-contact-us",
    storageBucket: "kazhuga-contact-us.firebasestorage.app",
    messagingSenderId: "75607983573",
    appId: "1:75607983573:web:356b00307fa19d8316a95c",
    measurementId: "G-YEX83CWE0W"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
console.log("Database object:", database);
export { database };