import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


//randering multiple element using react.fragment we can use sugar form of react.freagment also i.e only use <>childs</>
ReactDOM. render (
<React.Fragment>
<hl> Technical </hl>
<p>Piee die</p>
<h2>slorem epsium </h2>
</React.Fragment>
,
document . getElementById ("root"));