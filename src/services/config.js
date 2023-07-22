import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "muyu-terapias.firebaseapp.com",
  projectId: "muyu-terapias",
  storageBucket: "muyu-terapias.appspot.com",
  messagingSenderId: "880385918315",
  appId: "1:880385918315:web:3a45ea1589808bea0db82e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);