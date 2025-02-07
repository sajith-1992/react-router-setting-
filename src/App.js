import logo from './logo.svg';
import About  from './container/About'
import Profile from './container/Profile'
import { BrowserRouter,Routes, Route,  Link } from "react-router-dom"

import { useState } from 'react';

function App() {

  return (
<div className="App">
<button onClick={()=>setstate('about')}> About </button>
<button onClick={()=>setstate('profile')}> profile</button>

<BrowserRouter>

<Link to="/about">press</Link>
<Link to="/profile">profilepress</Link>
      <Routes>
        
        <Route path="/about" Component={ About } />
        <Route path="/profile" element={<h1>hello world</h1>} />
        
      </Routes>
  </BrowserRouter>


</div>  );
}

export default App;
