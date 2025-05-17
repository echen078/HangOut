// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBkMKRKm4840P6ZxrlAOl21oU28FBC0rgc",

  authDomain: "acm-hangout-bad1f.firebaseapp.com",

  projectId: "acm-hangout-bad1f",

  storageBucket: "acm-hangout-bad1f.firebasestorage.app",

  messagingSenderId: "836214428476",

  appId: "1:836214428476:web:fd99bb12e300ef19600439",

  measurementId: "G-HFE97R93ZB"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);