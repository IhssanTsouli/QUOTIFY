import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import iconstar from './assets/iconstar.png';
import njma from './assets/njma.png';
import drop from './assets/drop.svg';
// import { FaBeer } from 'react-icons/fa';
// import { FaBeer } from 'react-icons/fa';
import { FaFontAwesome } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Registre';

const App= () =>{
  return (
       <>
       <BrowserRouter>
       {/* <Themeprovider> */}
         <Routes>
         <Route path='/'  element={<Home/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/registre' element={<Register/>}/>
         </Routes>
         {/* </Themeprovider> */}
       </BrowserRouter>
       </>
  )
}

export default App;