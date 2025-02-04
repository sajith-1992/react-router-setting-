import logo from './logo.svg';
import About  from './container/About'
import Profile from './container/Profile'

import { useState } from 'react';

function App() {
let containner
const [state,setstate]=useState()
if(state === "about"){
containner  = 
<About></About>
}
if(state===  "profile"){
  containner =     <Profile></Profile>

}
  return (
<div className="App">
<button onClick={()=>setstate('about')}> About </button>
<button onClick={()=>setstate('profile')}> profile</button>


 {containner}
</div>
  );
}

export default App;
