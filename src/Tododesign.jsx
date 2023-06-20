import React, { useState } from "react";
import "./index.css";
import List from "./List";

let Tododesign=()=>{

    const[data,changedata]=useState("");
    const[dataarr,changedataarr]=useState([]);

 let listitem=(event)=>{
    changedata(event.target.value);
 }
let additem=(event)=>{
   changedataarr((prev)=>{
     let newdataarr=[...prev,data];
     return newdataarr;
   });
   changedata("");
}

let deleteitem=(val)=>{
 let newdeletearr= dataarr.filter((dataitem)=>{                //filter method will create a new array based on some condition in filter method
    return dataitem!=val;
  });
changedataarr(newdeletearr);                             //now react again re-render with newdeletearr and create list component again from starting(new state).that is why delete btn and div also get deleted with list item deletion(whole state in which item to be deleted gets delete).
}
  return(
    <>
    <div className="main">
      <div className="innerdiv">
       <div className="maincontain">
         <h2>ToDo List</h2>
         <div className="innercontain">
          <input type="text" name="ftext" placeholder="write here" value={data} onChange={listitem} />
          <button className="btn" onClick={additem}>+</button>
         </div>
             
             {dataarr.map((val,index)=>{
                return <List value={val} key={index} delfun={()=>{deleteitem(val)}} />            //dont use delfun={deleteitem(val)} directly bcz it will call deleteitem function directly without even clicking delete button(without onClick event),and delete list item just after it created automatically.
             })}

       </div>
      </div>
    </div>
    </>
  );
}

export default Tododesign;