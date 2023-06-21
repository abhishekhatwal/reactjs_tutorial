import React from "react";
//component name should be start with uppercase
const Section2=(prop)=>{
   let deletearrdata=()=>{
    prop.deletenote(prop.pos);
   }
    return(
    <>
    <div className="section2-div">
        <h2 contentEditable="true" className="section2-h2">{prop.title}</h2>
        <hr/>
        <p contentEditable="true" className="section2-p1">{prop.para}</p>
        <button onClick={deletearrdata} className="delete-btn">delete</button>
    </div>
    </>);
}

export default Section2;