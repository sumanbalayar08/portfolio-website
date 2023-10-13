import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Screens/Home";
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Home/>
    </BrowserRouter>
    
  );
}

export default App;
