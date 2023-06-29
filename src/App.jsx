import React, { useState } from 'react'
import { useRef } from 'react';

const App = () => {
  
  const firstname=useRef(null);

  
  let fun=(e)=>{
   e.preventDefault();
    console.log(firstname.current.value);
  }

  return (
    <>
    <form action="" onSubmit={fun}>
      <input type="text" ref={firstname} />
      <input type="submit" />
    </form>
  
    </>
  )
}

export default App;
