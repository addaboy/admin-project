// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAOWIhvrCbcbeeKvoazRIOvhOP9pdRIG_0",
  authDomain: "registerlogin-ea924.firebaseapp.com",
  projectId: "registerlogin-ea924",
  storageBucket: "registerlogin-ea924.appspot.com",
  messagingSenderId: "1089173117854",
  appId: "1:1089173117854:web:b113df0ebadd3a4e28948f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app)