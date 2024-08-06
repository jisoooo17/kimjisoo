import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css';
import Intro from './pages/Intro';
import AboutMe from './pages/AboutMe';


const App = () => {
  let navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro/>}></Route>
        <Route path="/aboutme" element={<AboutMe/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
