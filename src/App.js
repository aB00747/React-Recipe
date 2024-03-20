import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';
import NavBar from './Components/NavBar';
import ListandKeys from './Components/ListandKeys';
import Home from './Components/Home';
import BasicExp from './Components/BasicExp';
import Map from "./Components/ExampleComp/Map";

function App() {
  const list = [1, 2, 3, 4];
  return (
    <>
      <Router>
            <NavBar />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/BasicExp' element={<BasicExp />} />
            <Route path='/ListandKeys' element={<ListandKeys />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/Map" element={<Map />} />
        </Routes>
      </Router>
      {/* // <ListandKeys  props={list}/> */}
    </>
  );
}

export default App;
