import React, { useContext } from "react";
import {Firstname,Lastname} from "./App";

//component name should be start with uppercase
const ConC=()=>{
         
    let fname=useContext(Firstname);
    let lname=useContext(Lastname);         //directly getting value using usecontext hook which incase of context api is little difficult and messier
 
    return(
     <>
        <h1>my name is {fname} {lname} </h1>          
    </>);
}

export default ConC;
