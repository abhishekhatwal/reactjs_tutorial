import React, { useState } from "react";
import Header from "./Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Footer from "./Footer";
//component name should be start with uppercase
const App=()=>{
    const[dataarr,updatedataarr]=useState([]);

    let addobject=(data)=>{
          updatedataarr((preval)=>{
             return [...preval,data];
          })
    }

    let deletenote=(pos)=>{
       let newdataarr= dataarr.filter((i,ind)=>{
           return pos!=ind;
        })
        updatedataarr(newdataarr);
    }

    return(
    <>
    <Header/>                           
     <Section1 addobject={addobject}/>
     <section className="section-2">
     {dataarr.map((objval,index)=>{
        const textareav=objval.textareav;
        const textv=objval.textv;

         return  <Section2 title={textv} para={textareav} key={index} pos={index} deletenote={deletenote}  />
     })}
</section>
     <Footer/>
    </>);
}

export default App;
