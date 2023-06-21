import React from "react";
import  ReactDOM  from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById("root"));     //Define all component inside browserrouter tag so to create multipage website






//react router package allow u to create multipage website
/*with help of anchor tag(href property) it is inconvenient to create multi page webiste bcz with anchor tag whole website reloads to get a new page but in react we 
 use link or Navlink router tag to create multipage website which only replace the component which we want to show instead of reloading whole website to show new page.
-->switch tag(now Routes tag) in router pacakge allow u to display seperate component in different page and route(different from Routes tag) tag is used give a path to components.
-->browserRouter,NavLink(Link),switch(Routes) and route are tags of router package*/

//in order to use router package first import it using npm
//then import { BrowserRouter } from "react-router-dom"; and encapsulate all component which are define in react project inside browserRouter tag.
//import{Route,Switch(or Routes)} from "react-router-dom"; in which u define path
//define path for each component using switch(or Routes) and route tag
//use NavLink tag and provide the path(define above for components) of the component which we want to see in new webpage.



//--------------------------------------------------working--------------------------------------------------------------
/*
App.js

The App component is wrapped with the Router component(<BrowserRouter>) from react-router-dom, which enables the routing functionality.
The Navbar component is rendered within the Router component(<BrowserRouter>), ensuring that the navigation bar is present on all pages.
The Switch/Routes component from react-router-dom is used to render only the first Route that matches the current URL, providing the correct content based on the URL path.
Inside the Switch/Routes component, there are multiple Route components, each representing a specific path and the component to be rendered when that path is matched.
The exact prop is used on the root Route to ensure it matches only when the URL is an exact match.
The component/element prop is used to specify the component to render when the corresponding path is matched.

Navbar.js

The Navbar component contains a list of Link components, which are provided by the react-router-dom library.
Each Link component represents a navigation link in the navigation bar.
The to prop of the Link component specifies the path to navigate to when the link is clicked.
Clicking on a Link triggers a navigation event and updates the URL, causing the corresponding component defined in App.js to be rendered.
Overall, the Router component in App.js handles the routing functionality by determining which component to render based on the URL path. The Link components in Navbar.js provide a way to navigate between different pages of the website by updating the URL and triggering the rendering of the appropriate component.


*/