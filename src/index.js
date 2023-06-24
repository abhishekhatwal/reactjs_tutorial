import React from "react";
import  ReactDOM  from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById("root"));     //Define all component inside browserrouter tag so to create multipage website




//aside from react hooks(useEffect,useState) router pakage also provide 3 hooks useParam,useLocation and useHistory

//useLocation() hook give u the object which contain user current url