import React, { useState } from 'react';

function App() {
 
  //alternate
  /*
   const [fname, setfnameValue] = useState('');
  const [lname, setlnameValue] = useState('');

  const [fullname1, setfullname1Value] = useState('');
  const [fullname2, setfullname2Value] = useState('');

  const fun1=(event)=>{
    event.preventDefault();                 
    setfullname1Value(fname);
    setfullname2Value(lname);
};

 <h1>{fullname1}{fullname2}</h1>

  */
  const [fname, setfnameValue] = useState('');
  const [lname, setlnameValue] = useState('');

  const [fullname, setfullnameValue] = useState('');


  const fun1=(event)=>{
    event.preventDefault();                     //it will prevent page refreshing on default form submission behaviour
    setfullnameValue(fname+lname);
  };

  const fun2=(event)=>{
    setfnameValue(event.target.value);
  }
  const fun3=(event)=>{
    setlnameValue(event.target.value);
  }

  return (
    <>
      <form onSubmit={fun1}>
        <h1>{fullname}</h1>
        <div>
          <input type="text" value={fname} onChange={fun2} />
        </div>

        <div>
          <input type="text" value={lname} onChange={fun3} />
        </div>

        <input type="submit" value="click" />
      </form>
    </>
  );
}

export default App;
