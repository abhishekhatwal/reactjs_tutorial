// Home.js
//demostration of useParam() router hook
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {


        
  return (
    <div>
      <Link to="/users">User List</Link>
    </div>
  );
};

export default Home;
