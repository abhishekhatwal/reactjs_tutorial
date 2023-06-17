import React from "react";
import ReactDOM from "react-dom";



//for inline css rules-
//1-attribute should be written in camelcase
//2-vlaue should be enclosed in single court or double court
//3-semicolon replace by comma seperated vlue
//4-object should be pass in style and enclosed in {} bcz of js object is being used in jsx with {} tag


const obj={
    textAlign: 'center',
    fontWeight: 'bolder'
}

const obj2={
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '10px',
    border: '2px solid black',
    textAlign: 'center',
    justifyContent: 'center'
}


const name = "abhi";

const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";

ReactDOM.render(
<> 
<h1 style={obj}> My name is {name} </h1>
<div style={obj2}>
<img src={img1} alt="randomImages" />
<img src={img2} alt="randomImages" />
<img src={img3} alt="randomImages" />
</div>
</>,
document.getElementById("root")
);