// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnmsl4VFQYFuVZHo47GFnf_oS-G1rda80",
  authDomain: "health-app-2729f.firebaseapp.com",
  projectId: "health-app-2729f",
  storageBucket: "health-app-2729f.appspot.com",
  messagingSenderId: "562868614979",
  appId: "1:562868614979:web:4db46f9cd124bf3dc7a1f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
const firebaseAuth = getAuth(app);
export { firebaseAuth,createUserWithEmailAndPassword };