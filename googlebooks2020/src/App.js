import React from 'react';
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <HashRouter basename='/'>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </HashRouter>
  );
}

const Home = () => <div><h2>Home</h2></div>
const About = () => <div><h2>About</h2></div>

export default App;
