import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

const APIKey = process.env.REACT_APP_API_KEY;

const firebaseConfig = {
  apiKey: APIKey,
  authDomain: "acbelfast-cd0fa.firebaseapp.com",
  projectId: "acbelfast-cd0fa",
  storageBucket: "acbelfast-cd0fa.appspot.com",
  messagingSenderId: "893322173295",
  appId: "1:893322173295:web:90244505db97fe69ff269a",
  measurementId: "G-J2QNDJG6KN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth(app);
export const storage = getStorage(app);
