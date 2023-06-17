import React from "react";
import ReactDOM from "react-dom";
import fname from "./App";
import {lname, name,code} from "./App";

//import normal export as it is define while exporting with normal export
//while accessing function use () for calling it here
//{fname} etc used bcz js is being used in jsx 
ReactDOM.render(
<>
<ol>
    <li>{fname}</li>
    <li>{lname}</li>
    <li>{name()}</li>
    <li>{code()}</li>
</ol>
</>,
document.getElementById("root")
);