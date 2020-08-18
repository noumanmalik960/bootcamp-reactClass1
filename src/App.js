import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Hello from './Hello'

function App({name}) {
  return (
  <div><h1>Hello world from App.js created by {name}</h1>
      <Hello firstName="Nouman"></Hello>
  </div>
  );
}

export default App;