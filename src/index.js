import React from "react";
import  ReactDOM  from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById("root"));     //Define all component inside browserrouter tag so to create multipage website




//aside from react hooks(useEffect,useState) router pakage also provide 3 hooks useParam,useLocation and useHistory

/*The useParams hook is a feature provided by the React Router library that allows you to access the dynamic parameters from the URL in your
 React components. It extracts the values of URL parameters and makes them available for use within your component.*/