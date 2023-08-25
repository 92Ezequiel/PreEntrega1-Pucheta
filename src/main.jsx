import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEQhPX2STMaR9svOB4xUCc-NzRCgGgHtI",
  authDomain: "craft-veganstore.firebaseapp.com",
  projectId: "craft-veganstore",
  storageBucket: "craft-veganstore.appspot.com",
  messagingSenderId: "306965030016",
  appId: "1:306965030016:web:bfa911798ec32277123265"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
