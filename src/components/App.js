import React from 'react'
import '../styles/App.css';
import { useState } from 'react';
const App = () => {
 const color="rgb(238, 241, 0)";
  const [bg ,setBg]=useState(color);
 

const bgChange=()=>{
  let newBg=" rgb(238, 241, 0)";
  
  setBg(newBg);
}
const bgChangesad=()=>{
  let newBg=" rgb(19, 0, 164)";
  
  setBg(newBg);
}
const bgChangesl=()=>{
  let newBg="rgb(35, 177, 0)";
  
  setBg(newBg);

}
const bgChangeex=()=>{
  let newBg="rgb(255, 0, 66)";
  
  setBg(newBg);

}

  

  return (
    <>
   <div  style={{backgroundColor:bg}}>
    <select >
      <option  onClick={bgChange} >Happy</option>
       <option onClick={bgChangesad}>Sad</option>
      <option onClick={bgChangesl}>Sleepy</option>
     <option onClick={bgChangeex}>Excited</option>
     </select>
    </div>

    </>
   
  )
}
 

export default App;
