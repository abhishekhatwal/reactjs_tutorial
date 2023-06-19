/*
In this example, the useState hook is used to create a state variable count with an initial value of 0 and a setter function setCount.
 The count value is displayed in the JSX code, and when the button is clicked, the increment function is called, which updates the count state by invoking setCount with the new value.
*/


import React, { useState } from 'react';

function App() {
    let count=0;
    let bg="red";

    const [newcount, setCount] = useState(count);           //hooks created
    const [upbg,fun]=useState(bg);

    const increment = () => {
      setCount(newcount + 1);

      let newupbg="yellow";
      fun(newupbg);
    };

    const change = () => {
        setCount(newcount + 1);
  
        let newupbg="red";
        fun(newupbg);
      };
  
    return (
      <div style={{backgroundColor:upbg}}>
        <p style={{color:"white",fontSize:"26px",fontWeight:"bolder"}}>Count: {newcount}</p>                 
        <button onClick={increment} onDoubleClick={change}>Increment</button>
      </div>
    );
  }
  
  export default App;

  /*
  in react you cannot access or update the html/jsx element value directly like you do in js by creating a simple function to increment count value r changing background color but here u have to use state and hooks to manipulate elements data in runntime.
  */