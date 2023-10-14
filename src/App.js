import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Screens/Home";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import About from "./Screens/About";
import Contacts from "./Screens/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Home/>
    <About/>
    <Contacts/>
    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
