import React from "react";
import "./index.css";


let List=(prop)=>{
  
  return(
    <>
    <div className="listdiv"><button className="deletebtn" onClick={prop.delfun}>x</button>
         <ul>
          <li>{prop.value}</li>
         </ul>
         </div>
    </>
  );
}

export default List;