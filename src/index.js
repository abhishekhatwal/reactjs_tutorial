import React from "react";
import  ReactDOM  from "react-dom";

import App from "./App";
import store from "./store";
import { Provider } from "react-redux";



ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById("root"));    

//for using redux install (2 depandancy) redux and react-redux depandancey
//npm i redux react-redux

//redux- redux is same as hook which is used to mintain state(state management) but only differcence is that all component state is store in one place and any component can fetch/use state from that store
//also one more differecne is that with hooks u cannot send data from child to parent component(using props) but redux u can do that by storing child data to common store and fetch from there

//redux is a pattern and library for managing and updating apllication state using event called as actions,redux serve as centralized store for state that need to be ued across your entire application.
/*redux is formed by 
action-  what to do
reducer- how to do
store-   object which hold states for application
function assosiate with store-createstore,dispatch,getstore */


/* working of redux in here

 when an action is dispatched from a component using the dispatch function, the Redux store invokes the root reducer. The root reducer then 
 delegates the action to the appropriate reducer based on the action type. The corresponding reducer handles the action and returns a new 
 state. The updated state is then stored in the Redux store. Components subscribed to the relevant state using the useSelector hook are 
 notified of the state changes and re-rendered with the updated data.*/


 /*The useSelector hook is used to access the state from the Redux store. It takes a selector function as an argument, which allows you to 
 select a specific piece of state from the store. In this case, it selects the changenum state from the store.*/

 /*The useDispatch hook is used to get a reference to the dispatch function from the Redux store. The dispatch function is responsible for
  dispatching actions to modify the state.*/


/* q-what if multiple reducer is present in combine reducer function(in main_reducer) in then how redux know which reducer is called
ans-eg-when increment button click then dispatch function call incnum function then return object(contain type) is send to main_reducer component
by redux now the return object(contain type key) is passed to every reducer as an object in action parameter then function runs in every reducer
and action.type is checked if it matches then return value/state is store in reduxstore then useselector is used to retreive the changes(happens in data/state of changenum reducer function) from reduxstore and re-render the component with new state  */