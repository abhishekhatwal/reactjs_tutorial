import React from "react";
import  ReactDOM  from "react-dom";
import App from "./App"

ReactDOM.render(
  <>
  <App></App>
  </>,document.getElementById("root")
);

/*
controlled component and unctrolled component in reactjs


The main difference between controlled and uncontrolled components in React relates to how they manage and handle form inputs and state.

Controlled Components:

In a controlled functional component, the state of the form inputs is controlled and managed by React.
The component's state holds the current value of each form input.
When the user interacts with an input (like typing in a text field or selecting a checkbox), an event handler is triggered, which updates the state with the new value.
The component re-renders with the updated state, and the new value is reflected in the input field.
You have full control over the input's value, and you can perform validations or manipulate the input data as needed.

In controlled components, the form inputs (such as text fields, checkboxes, etc.) are controlled by React state.
The component's state holds the current value of the input, and any changes to the input value are handled by updating the state.
To update the value of a controlled input, you need to provide an onChange event handler that updates the state with the new value.
The component re-renders with the updated value from the state, and you have full control over the input's behavior and state.
Controlled components are typically used when you need to have direct control over the input's value, validate or manipulate the input data, or synchronize multiple inputs.
import React, { useState } from 'react';
function ControlledComponent() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Input value: {inputValue}</p>
    </div>
  );
}
export default ControlledComponent;



Uncontrolled Components:

In an uncontrolled functional component, the state of the form inputs is not controlled or managed by React.
The form inputs manage their own state internally using the browser's DOM.
You can still access the values of the inputs using other means, such as using a ref or the event object.
The values of the inputs are not tied to React's state, so you don't need to write code to handle and update the input values explicitly.
Uncontrolled components are useful for simple forms or when you prefer a more declarative and concise approach without explicitly managing the state.

In uncontrolled components, the form inputs manage their own state internally, without the need for explicit management through React state.
The input values are handled by the browser's DOM, and you can access their values using a ref or the event object.
Uncontrolled components are useful for simple forms or when you don't need to perform complex validation or manipulate the input data.
They are typically used when you want a more declarative approach, with less code and direct interaction with the DOM.

import React from 'react';
function UncontrolledComponent() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target.elements.input.value;
    console.log('Input value:', inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="input" />
      <button type="submit">Submit</button>
    </form>
  );
}
export default UncontrolledComponent;


To summarize, in a controlled functional component, React manages and controls the state of the form inputs, while in an uncontrolled functional component, the inputs manage their own state internally. Controlled components offer more control and flexibility, allowing you to perform validations and manipulate the input data. Uncontrolled components provide a simpler and more declarative approach, especially for straightforward forms where you don't need to perform complex state management
*/