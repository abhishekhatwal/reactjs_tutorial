import React from "react";
import  ReactDOM  from "react-dom";
import App from "./App";



ReactDOM.render(<App/>,document.getElementById("root"));    

//useRef hook-it is used in uncontrolled component where dom is used to access the input field/element.
//useState hook is used in control component where react manipulate input field dynamically using onchange method and useState hook.
/*
major difference in control(in which useState used) and uncontrol(in which useRef is used) component is that in control com data validation
is dynamic i.e if u type one letter also it will check validation using useState hook bcz of onchange method run in input field which triger
useState hook every time data change but in useRef whole data in input field is validated only after form submit method run(in case of control com also before form submit method u can access/validate input field data) not on state 
change(bcz no onchange method) .inside onsubmit method data from input field is collected using onref hook(i.e ref attribute give reference of input field and 
ref.current.value gives data in input field) 
*/