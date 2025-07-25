import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBroCoFpXBbHR-dbB3YrQrhPiDbqxCmIMY",
  authDomain: "react-12pm.firebaseapp.com",
  projectId: "react-12pm",
  storageBucket: "react-12pm.firebasestorage.app",
  messagingSenderId: "705575388697",
  appId: "1:705575388697:web:c96401516b35ac42804c88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);