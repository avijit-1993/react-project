import React from 'react';

import './App.css';
import './index.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';


import { Routes ,Route, Navigate } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';

import Navbar from './Navbar/Navbar';
import TodoList from './TodoList';





function App() {



  return (
    <>

    <Navbar/>

  <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/contact" element={<Contact/>} />
     
      <Route path="*" element={<Navigate to ="/" />}/>  

      
  </Routes>

  <TodoList />

    

    </>
  )
}

export default App;
