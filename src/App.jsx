// App.js
import React, { useState } from "react";
import  Searchresult from "./Searchresult";

const App = () => {

  const[search,setsearch]=useState();


  return (
    <>
   <input type="text" style={{margin:"20px"}} value={search} onChange={(e)=>setsearch(e.target.search)}/>
   <Searchresult search={search}/>
      </>
  );
};

export default App;

