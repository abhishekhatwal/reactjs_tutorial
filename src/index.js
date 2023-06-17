import React from "react";
import ReactDOM from "react-dom";

let currdate=new Date();
currdate=currdate.getHours();
let greet="";
const cssstyle={
    color:'green'
};

if(currdate>=1 && currdate<12){
    greet="good morning";
    cssstyle.color='red';
}else if(currdate>=12 && currdate<19)
{
    greet="good afternoon";
    cssstyle.color='yellow';
}else{
    greet="good night";
    cssstyle.color='pink';
}

ReactDOM.render(
<h1 className="head">hello welcome ,<span style={cssstyle}>{greet}</span></h1>,
document.getElementById("root")
);