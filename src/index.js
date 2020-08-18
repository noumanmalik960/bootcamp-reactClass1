import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// first way
// function Greet({name}) {
//   return <div>Hello {name}!</div>
// }
// ReactDOM.render(<Greet name="Ali" />, document.querySelector('#root'))

// second way
// ReactDOM.render(<App name="Nouman" />, document.querySelector('#root'))


// function MediaCard(props) {
//     return <div>
//         <h2>{props.title}</h2>
//         <p>{props.body}</p>
//     </div>
// }

// ReactDOM.render(<MediaCard title={<h2>Greet</h2>} body="Hello everyone"/> , document.querySelector('#root'));

ReactDOM.render(<App name="ali"/>, document.querySelector('#root'))