//i want to pass name to ConC component without using prop and  sending it to ConA,ConB instead directly sending data to ConC that can be done with context api

import React, { createContext } from "react";
import ConA from "./ConA";
//component name should be start with uppercase
const App=()=>{

    const Firstname=createContext();             //creating a component with help of createcontext() method which use to pass data in another component without using prop
   
    return(
     <>
    <Firstname.Provider value={"abhi"}>           
      <ConA></ConA>
    </Firstname.Provider>
    </>);
}

export default App;
export {Firstname};






//react hook provide a concept call context api
//react context api allow u to access data at different level of component tree without passing prop to every level/component
//context Provider send the data context consumer receive the data.