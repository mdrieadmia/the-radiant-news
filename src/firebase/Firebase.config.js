// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5_hHpfN4k7Pytcr3mz0R6N6gcjRLaetY",
  authDomain: "the-radiant-news.firebaseapp.com",
  projectId: "the-radiant-news",
  storageBucket: "the-radiant-news.appspot.com",
  messagingSenderId: "167325372686",
  appId: "1:167325372686:web:5cab6e2bd4080da244c75f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;