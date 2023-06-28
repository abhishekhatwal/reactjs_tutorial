import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { incNum,decNum } from './action/action';
const App = () => {
  const mystate=useSelector((state)=>{
           state.changenum
  })
  const dispatch=useDispatch();
  return (
    <>
     <input type="number" vlaue={mystate} />
     <button onClick={()=>{dispatch(incNum(5))}}>increment</button>
     <button onClick={()=>{dispatch(decNum)}}>decrement</button>
    </>
  )
}

export default App;
