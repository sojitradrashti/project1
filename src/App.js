import React from "react";
import Home from "./routes/Home";
import Company from "./routes/Company";
import Services from "./routes/Services";
import About from "./routes/About";
import Contact from "./routes/Contact";
import { Routes ,Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home /> }/>
        <Route path="/company" element={<Company />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
