
import {React,useContext} from 'react'
import { AppContext} from '../Context'
function Inside() {
    const{data}= useContext(AppContext)
  return (
    <div style={{backgroundColor:'yellow',width:"500px"
    }}>
      <h1>this  is inside {data} </h1>
    </div>
  )
}

export default Inside
