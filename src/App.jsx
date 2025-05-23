import React from 'react';
import{ Routes, Route, BrowserRouter } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Resume from "./Resume.jsx";



function App() {


  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App

