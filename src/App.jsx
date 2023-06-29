import React, { useReducer } from 'react'

let reducerfun=(state,action)=>{
 switch(action.type){
  case "increment":return state+1;
  case "decrement":return state-1;
  default:return state;
 }
}

const App = () => {
  
  let initialstate=0;
  const[changestate,dispatch]=useReducer(reducerfun,initialstate);
  

  return (
    <>
    <h1>{changestate}</h1>
     <button onClick={()=>{dispatch({type:"increment"})}}>increment num</button>
     <button onClick={()=>{dispatch({type:"decrement"})}}>decrement num</button>
    
    </>
  )
}

export default App;
