import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Hello from './Hello'
import './index.css'
import MediaCard from './Task2.js'
import Gate from './Gate'

function App(props) {
  return (
  <div className='center'>
    <h1>Task 1</h1>
    <p>Hello world from App.js created by <strong>{props.name}</strong></p>
    <h2>Another html tag (h2)</h2>
    <p className='p1'>JS inside JSX: add 2 and 3 = {2+3}. (this is styled through custom css)</p>
    <hr/>
    <h1>Task 2</h1>
    <MediaCard title={<h2>Media Card</h2>} body="This is the body of Media card" imageUrl="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search-v2_297x176.jpg"/>
    <h2>Gate Component</h2>
    <Gate isOpen={true} />

  </div>

  );
}

export default App;