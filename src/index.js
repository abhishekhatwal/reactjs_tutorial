import React from "react";
import  ReactDOM  from "react-dom";
import App from "./App"

ReactDOM.render(
  <>
  <App></App>
  </>,document.getElementById("root")
);

/*
In React, hooks and state are important concepts for managing and updating data within a component.

State:

State is a JavaScript object that represents the current state of a component.
It allows components to have dynamic data that can change over time.
State is managed and controlled within a component, and when the state changes, React re-renders the component to reflect the updated state.
State is typically defined using the useState hook in functional components or as a property in class components.
To update the state, you use the setter function provided by React, such as setState in class components or the updater function returned by the useState hook in functional components.


Hooks:

Hooks are functions that allow you to use state and other React features in functional components.
They provide a way to add and manage stateful logic without using class components.
Hooks allow functional components to have lifecycle methods, manage state, and perform side effects.
React provides several built-in hooks, such as useState, useEffect, useContext, useReducer, and more.
Custom hooks can also be created to encapsulate reusable logic and share it across multiple components.

Hooks and state provide a powerful way to manage data and add functionality to React components. They make functional components more versatile, reusable, and easier to maintain compared to class components.
*/