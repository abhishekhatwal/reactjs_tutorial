import React, { useState } from 'react';

function ControlledComponent() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {              //event object is passed as parameter when u call onChange method
    setInputValue(event.target.value);          //(event.target.value) gives u current state data when u type in inputbox. for every character u type state of element changes.
  };

  return (
    <>
       <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Input value: {inputValue}</p>
    </div>

       <div>
      <input type="text" value="abc" />
      <p> you are unable to write anything in input type text in this element bcz  value attribute in input has a fixed value abc also state of this element changes when u write anything in input box to write anything u have to give value attribute a state variable which changes data on state changes also for changing state u have to implement onChange method</p>
    </div>
    </>
  );
}

export default ControlledComponent;
