
 import React  from 'react';
// import About from './container/About';
// import Profile from './container/Profile';
// import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";


import {   setDoc ,doc} from "firebase/firestore";
import { db } from './firebase/config'// Ensure you have initialized Firestore and exported `db`

function App() {
  const handleClick = async () => {
    
    try {
      await setDoc(doc(db, "users", "LA"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA"
      })
      
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;