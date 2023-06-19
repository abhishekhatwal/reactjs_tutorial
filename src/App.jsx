import React, { useState } from 'react';

function App() {
 

  //handling form state using object

  const [data, setdataValue] = useState({
    ftext:"",
    fnumber:"",
    femail:""
  });


  const fun2=(event)=>{
    let x=event.target.name;
    let y=event.target.value;
 
                                              //preval hold previous state values
     setdataValue((preval)=>{                 //preval is object in this case bcz usestate has object as parameter .in case of usestate parameter is array or simple variable preval denote  arary or simple variable 
       if(x=="textf")
       {
        return({ftext:y,fnumber:preval.fnumber,femail:preval.femail});
       }
       else if(x=="numberf")
       {
        return({ftext:preval.ftext,fnumber:y,femail:preval.femail});
       }
       else if(x=="emailf")
       {
        return({ftext:preval.ftext,fnumber:preval.fnumber,femail:y});
       }
     });
}

  const [finaldata, setfinaldata] = useState({
    ftext:"",
    fnumber:"",
    femail:""
  });

   const fun1=(event)=>{
    event.preventDefault();                     //it will prevent page refreshing on default form submission behaviour
    setfinaldata(data);
  };
 

  return (
    <>
      <form onSubmit={fun1}>
        <h1>{finaldata.ftext}</h1>
        <h2>{finaldata.fnumber}</h2>
        <h3>{finaldata.femail}</h3>
        <div>
          <input type="text" name="textf" value={data.ftext} onChange={fun2} />
        </div>

        <div>
          <input type="number" name="numberf"  value={data.fnumber} onChange={fun2} />
        </div>

        <div>
          <input type="email"  name="emailf" value={data.femail} onChange={fun2} />
        </div>

        <input type="submit" value="click" />
      </form>
    </>
  );
}

export default App;
