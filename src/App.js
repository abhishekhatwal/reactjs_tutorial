import React from "react";
import Heading from "./Heading";
import List from "./List";

//  App.jsx/App.js is a component. function name should be same as component name
function App(){
    return (
    <>
    <Heading></Heading>
    <List></List>
    </>
    );
}


//export function App() by wirting export default App; dont use () otheriwse it will called directly
export default App;
