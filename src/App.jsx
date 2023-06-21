
import React, { useEffect, useState } from "react";

//component name should be start with uppercase
const App = () => {
const [count,addin]=useState(0);

let increment=()=>{
 addin(count+1);
}

useEffect(()=>{                                                   //this  useEffect function invokes just after increment function bcz button clicked will increment count and change state of button bcz count++, whole component will rerender then useEffect invokes.
    alert(`useEffect invokes`);                    
    document.title=`increment by ${count}`;
});

    return (
        <>
            <button onClick={increment}>click {count}</button>
        </>);
}

export default App;

//useEffect hook allow you to perform certain operation when component render
//callback function inside useeffect hook will be called everytime whenever there will be any change in state(data) .bcz every time state change component rerender and useeffect will be called after rerender of component.
//first time when page load useeffect it define runs.