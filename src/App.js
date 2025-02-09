import logo from './logo.svg';
import About from './container/About';
import Profile from './container/Profile';
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

import { AppContext } from './Context';

function App() {
  const[state,setState]=useState(10)
 const navigate = useNavigate() 
  return (
  
    
      <div className="App">
        <nav>
          <button onClick={() => navigate('/about')}>About</button>
          <button onClick={() => navigate('/profile')}>Profile</button>
        </nav>
              <AppContext.Provider  value={{data:state}}>
        <Routes>
        
          <Route path="/about" element={<About />} />
          <Route   path="/profile" element={<Profile />} />
          
        </Routes>
        </AppContext.Provider>
      </div>
    
  );
}

export default App;