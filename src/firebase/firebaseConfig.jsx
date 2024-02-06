// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvvThWC2_keo0H2yfNyRxZ_hgfpSA8Ghk",
  authDomain: "e-bharat-2473b.firebaseapp.com",
  projectId: "e-bharat-2473b",
  storageBucket: "e-bharat-2473b.appspot.com",
  messagingSenderId: "75942904388",
  appId: "1:75942904388:web:53fd64611c62a787263211",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
