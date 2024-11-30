import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCWfhrZrRZOjBanJHLP8a2Jo51rBqKiV78",
  authDomain: "modachi-bf2c2.firebaseapp.com",
  databaseURL: "https://modachi-bf2c2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "modachi-bf2c2",
  storageBucket: "modachi-bf2c2.firebasestorage.app",
  messagingSenderId: "86598756341",
  appId: "1:86598756341:web:6a713248065179e2d462bc",
  measurementId: "G-1J6WVZX18F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const database = getDatabase(app);

// Initialize Analytics conditionally (not available in all environments)
let analytics = null;
isSupported().then(yes => yes && (analytics = getAnalytics(app)));

export { app, auth, firestore, storage, database, analytics }; 