import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//expressing/using js in between jsx
//es6 string literal `${first} ${last}` in between jsx

let x="abhi";
let first="ab";
let last="hat";

ReactDOM. render (
<>
<hl> my name is {x} </hl>
<p>function is {Math.random()}</p>
<h2>{`first and last name is ${first} ${last}`} </h2>   
<h3>add {2+6}</h3>            
</>
,
document . getElementById ("root"));