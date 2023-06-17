import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

//react enable us to create our own pros i.e attributes/properties which in this case are imgsrc,title,sname,link are our own define attributes which can be access in caed.jsx using parameter
ReactDOM.render(
<>
<Card imgsrc="https://picsum.photos/200/300"  title="netflix originals" sname="DARK" link="https://www.netflix.com/fr-en/title/80100172"></Card>
</>,
document.getElementById("root")
);