import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import { AboutUs } from './Components/AboutUs';
import { Experience } from './Components/Experience';
import Contactus from './Components/ContactUs';
import { Portfolio } from './Components/Portfolio';
import { Skills } from './Components/Skills';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/aboutus" element={<AboutUs />}></Route>
          <Route exact path="/experience" element={<Experience />}></Route>
          <Route exact path="/contactUs" element={<Contactus />}></Route>
          <Route exact path="/portfolio" element={<Portfolio />}></Route>
          <Route exact path="/skills" element={<Skills />}></Route>
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}
export default App;