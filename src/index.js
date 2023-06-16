import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//creating reactjs web page using pure reactjs -----  <h1>hello world !!</h1> this is a jsx(javascript extension or js+xml) code importing react module help us to write jsx like this. document.getElementById('root') is dom method which can be used through importing react-dom module.
 ReactDOM.render(<h1>hello world !!</h1>,document.getElementById('root'));

 //another method to create reactjs web page.this method converted by above method by babel internally for webbrowser understanding. 
 ReactDOM.render(React.createElement("h1",null,"hello world !!"),document.getElementById("root"));

 //another method ,pure vanilla js code of above implementation(whithout react) 
 var h1=document.createElement("h1");
 h1.innerHTML="hello world !!";
 document.getElementById("root").appendChild(h1);


 //webpack --webpack is installed with  with nodejs.webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling js reactjs files.
 //babel  --Babel is a JavaScript compiler that converts modern JavaScript code into a version compatible with all browsers. Babel enables React developers to use the latest JavaScript syntax in their components. Babel transpiles modern JavaScript for use in React components and all browsers.

