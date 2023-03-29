
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4K_ikggMFy226BV5hqg0DiMCpHkW5xew",
  authDomain: "dndbase-eb97e.firebaseapp.com",
  projectId: "dndbase-eb97e",
  storageBucket: "dndbase-eb97e.appspot.com",
  messagingSenderId: "591497298320",
  appId: "1:591497298320:web:8da730790fcef2ad09f315"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const db = getFirestore(app);