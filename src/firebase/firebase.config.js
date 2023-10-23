// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC92dhbX_nFUYVM5ibhHyVz_CGZSFjDSHs",
  authDomain: "coffee-store-c7f3a.firebaseapp.com",
  projectId: "coffee-store-c7f3a",
  storageBucket: "coffee-store-c7f3a.appspot.com",
  messagingSenderId: "634343663201",
  appId: "1:634343663201:web:5c30a99953623c5168ac20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;