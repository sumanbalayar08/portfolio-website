import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Screens/Home";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import About from "./Screens/About";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Home/>
    <About/>
    </BrowserRouter>
    
  );
}

export default App;
