// import logo from './logo.svg';
// import About from './container/About';
// import Profile from './container/Profile';
// import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { db} from './firebase/config';

//import { AppContext } from './Context';

function App() {
  const[state,setState]=useState(10)
  
  return (
  
    
      <div className="App">
        <button onClick={()=>{
         db.collection('users').doc('liam').get().then()
        }} ></button>
      </div>
    
  );
}

export default App;