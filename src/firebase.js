// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0ribfufZ58YBR_ybYm2TvXb0nH_F5MS8",
  authDomain: "e-commerce-project-93edc.firebaseapp.com",
  projectId: "e-commerce-project-93edc",
  storageBucket: "e-commerce-project-93edc.appspot.com",
  messagingSenderId: "259014303891",
  appId: "1:259014303891:web:ab045a77e6276434842d66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();


export {db};