import React, { useState } from "react";

//component name should be start with uppercase
const Section1=(prop)=>{

  const[data,updatedata]=useState({
    textv:"",
    textareav:""
  });


  let changeData=(event)=>{
    const {name,value}=event.target;
    updatedata((preval)=>{
      if(name==="textn"){return {textv:value,textareav:preval.textareav}}
      else if(name==="textarean") {return {textv:preval.textv,textareav:value}}
    })
    
  }

  const [isVisible, setIsVisible] = useState(false);

  let addObj=()=>{
     prop.addobject(data)
     setIsVisible(false);
     updatedata({textv:"",textareav:""})
  }

  let changedefaultform=(event)=>{
    event.preventDefault();
  }

  let showtextarea=()=>{
    setIsVisible(true);
  }
    return(
    <>
    <section className="section-1">
    <div className="section1-div">
        <form onSubmit={changedefaultform} className="section1-form1">
          <input type="text" name="textn" value={data.textv} onChange={changeData}  autocomplete="off" placeholder="title here" className="section1-text1" onClick={showtextarea}/>
          {isVisible?<> <textarea name="textarean"  cols="30" rows="10" value={data.textareav} onChange={changeData} placeholder="description here" className="section1-textarea1"></textarea>
  <button onClick={addObj} className="add-btn">+</button> </>:null}
        </form>
    </div>
    </section>
    </>);
}

export default Section1;




/*code for toggle color of paragraph onclick
 
import React, { useState } from 'react';

function App() {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  const itemStyle = {
    color: isSelected ? 'red' : 'black',
  };

  return (
    <div>
      <p style={itemStyle} onClick={handleClick}>
        Selectable Item
      </p>
    </div>
  );
}

export default App;

*/