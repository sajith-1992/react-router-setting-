
 import React  from 'react';
// import About from './container/About';
// import Profile from './container/Profile';
// import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";


import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase/config'// Ensure you have initialized Firestore and exported `db`

function App() {
  const handleClick = async () => {
    const colRef = collection(db, 'users');
    try {
      const snapshot = await getDocs(colRef);
      snapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
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