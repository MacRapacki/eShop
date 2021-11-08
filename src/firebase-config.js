import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoqFK0Idj1t-Uplp91z9fV6Ltu1RvvJFY",
  authDomain: "eshop-91ba6.firebaseapp.com",
  projectId: "eshop-91ba6",
  storageBucket: "eshop-91ba6.appspot.com",
  messagingSenderId: "149014466316",
  appId: "1:149014466316:web:bac688c955adc475c88329",
  measurementId: "G-TBRTVTP3CZ",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
