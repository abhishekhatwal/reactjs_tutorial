// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import NotFound from "./NotFound";

const App = () => {
  return (
    <>
      <Navbar />
     <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route  element={<NotFound />} />
    </Routes>
      </>
  );
};

export default App;

//in place of Switch now we use Routes and in place of component attribute we have to use element attribute whose value should be object containing component 