import React from "react";
import ReactDOM from "react-dom";

// attributes of html should be camelcase without any hyphen(-) is written in jsx
//all element of html which have no closing tag should have closing tag in jsx e.g-img,br,hr tag should have closing tag in jsx 

const name = "vinod";

const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";

ReactDOM.render(
<> 
<h1 contentEditable="true"> My name is {name} </h1>
<img src={img1} alt="randomImages" />
<img src={img2} alt="randomImages" />
<img src={img3} alt="randomImages" />
</>,
document.getElementById("root")
);