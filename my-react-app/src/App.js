import React from "react";
import {  Routes, Route } from "react-router-dom";


import About from "./components/About";
import Navbar from "./components/navbar";
import GenerateUrl from "./components/GenrateURL";

function App() {
  return (

      <div className="App">
     <Navbar/>
        <h1 className="wellcm">Welcome To URL Shortener App</h1>
        <Routes>
          <Route path="/" element={<GenerateUrl />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
  
  );
}

export default App;
