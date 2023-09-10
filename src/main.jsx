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
  apiKey: "AIzaSyCf7WgsA6GEixp57zjMllgFcPj5w-55qJ4",
  authDomain: "limbohats.firebaseapp.com",
  projectId: "limbohats",
  storageBucket: "limbohats.appspot.com",
  messagingSenderId: "690527526497",
  appId: "1:690527526497:web:e4f59a07ce39d3d48f1420"
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
