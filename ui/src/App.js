import logo from './logo.svg';
import React from 'react';
import './App.css';
import Body from './components/Body';
import Result from './components/Result'
import Editimg from './components/Editimg';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login/index";
import Signup from "./components/Singup/index";
import Main from "./components/Main/index";
import Navb from './components/Navb';


function App() {
  const user = localStorage.getItem("token");
  return (
    <>
    {/* <BrowserRouter>
    <Routes>
          <Route exact path="/" element={<Body/>} />
          <Route exact path="/edit" element={<Editimg/>} />
          <Route exact path="/result" element={<Result/>} />
    
    </Routes>
    </BrowserRouter> */}
    <BrowserRouter>
   
            <Routes>
                {user && <Route path="/" exact element={<Body/>} />}
                <Route path="/signup" exact element={<Signup />} />
                
                <Route path="/login" exact element={<Login />} />
                {/* <Route path="/body" exact element={<Body />} /> */}
                <Route path="/edit" exact element={<Editimg />} />
                <Route path="/result" element={<Result/>}/>
                <Route path="/" element={<Navigate replace to="/login" />} />
            
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
