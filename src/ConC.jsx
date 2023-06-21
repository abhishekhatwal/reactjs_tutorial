import React from "react";
import {Firstname} from "./App";

//component name should be start with uppercase
const ConC=()=>{
         
    return(
     <>
     <Firstname.Consumer>{(fname)=>{
        <h1>my name is {fname} </h1>                          //this will  get the data passed directly from App component without prop
     }}</Firstname.Consumer>
       
    </>);
}

export default ConC;
