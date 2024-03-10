import React from 'react';
import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from "./components/Dashboard"
import './App.css';



class App extends Component{
  render(){
   return(
    <Routes>
      <Route path="/" element={<Dashboard />}/>
    </Routes>
   ) 
  }
}

export default App;
