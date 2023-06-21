
import React, { useState } from "react";

//component name should be start with uppercase
const App = () => {
    const [num, selectop] = useState();

    let fun1 = (event) => {
        selectop(event.target.value);
    }


    return (
        <>
            <h1>you selected {num}</h1>
            
            <select value={num} onChange={fun1}>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="7">7</option>
                <option value="9">9</option>
            </select>
        </>);
}

export default App;

