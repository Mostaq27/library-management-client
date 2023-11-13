// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD91OcI4fJsf3AYeC_1WqU4sIGEU6T7FA8",
  authDomain: "susis-library.firebaseapp.com",
  projectId: "susis-library",
  storageBucket: "susis-library.appspot.com",
  messagingSenderId: "863989058855",
  appId: "1:863989058855:web:f7ba1ffb9ff8aa30876d02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
