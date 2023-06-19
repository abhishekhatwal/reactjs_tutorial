/* props in react

In React, props (short for "properties") are used to pass data and configuration from a parent component to its child components(or btw the components). Props are a fundamental concept in React and play a crucial role in building reusable and modular components.
Here's an explanation of how props work in React:
Parent Component: In the parent component, you define and create child components and provide them with props. Props are specified as attributes when you include the child component in the parent's JSX code.
Child Component: The child component receives the props passed from the parent as an argument in its function or class declaration. These props are then used to configure the behavior or content of the child component.

Props in React are read-only, meaning that a child component cannot modify the props received from its parent. This design encourages a unidirectional data flow, where data is passed down from parents to children.
Props allow for the composition and reuse of components, making it easier to build modular, maintainable, and flexible React applications.

*/  

/*
// ParentComponent.jsx
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const name = 'John Doe';
  const age = 25;

  return (
    <div>
      <ChildComponent name={name} age={age} />
    </div>
  );
}

export default ParentComponent;
 */
  


/*
// ChildComponent.jsx
import React from 'react';

function ChildComponent(props) {

  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default ChildComponent;
*/