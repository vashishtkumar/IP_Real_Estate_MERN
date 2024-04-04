// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-86e1e.firebaseapp.com",
  projectId: "mern-estate-86e1e",
  storageBucket: "mern-estate-86e1e.appspot.com",
  messagingSenderId: "989027259328",
  appId: "1:989027259328:web:690a537df096a0cf786e25"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);