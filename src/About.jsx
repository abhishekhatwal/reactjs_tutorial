// About.js
import React from "react";
import {useHistory} from "react-router-dom";
const About = () => {
   const his=useHistory();
   console.log(his);                      //goBack() funtion in  obj  provided by useHistory hook trackdown the previous history  i.e from which page user came from

  return (
    <div>
     <button onClick={()=>{his.goBack()}}>click here to go to previous page using useHistory hook</button>
    </div>
  );
};

export default About;
