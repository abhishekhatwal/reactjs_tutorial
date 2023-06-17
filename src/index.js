import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//check index.css 
//class word is reserve in js so className is used also for is reserverd word in js
//external css working is same

const name = "abhi";

const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";

ReactDOM.render(
<> 
<h1 className="heading"> My name is {name} </h1>
<div className="main">
<img src={img1} alt="randomImages" />
<img src={img2} alt="randomImages" />
<img src={img3} alt="randomImages" />
</div>
</>,
document.getElementById("root")
);