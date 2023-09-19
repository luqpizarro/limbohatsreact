import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRESTORE_API_KEY,
  authDomain: import.meta.env.VITE_FIRESTORE_AUTH_DOMAIN,
  projectId: "limbohats",
  storageBucket: import.meta.env.VITE_FIRESTORE_SOTRAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIRESTORE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIRESTORE_APP_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
