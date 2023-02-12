import logo from './logo.svg';
import React from 'react';
import './App.css';
import Body from './components/Body';
import Result from './components/Result'
import Editimg from './components/Editimg';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
          <Route exact path="/" element={<Body/>} />
          <Route exact path="/edit" element={<Editimg/>} />
          <Route exact path="/result" element={<Result/>} />
    
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
