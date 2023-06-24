// Home.js
//demostration of useLocation() router hook
import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {

  const loc=useLocation();                    //give u object which contain current url info along with other information
  console.log(loc)
        
  return (
    <div>
      <h1>Welcome to the Home page! current path is {loc.pathname}</h1>
      <p>This is the landing page of our website.</p>
    </div>
  );
};

export default Home;
