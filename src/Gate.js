import React from 'react';


// using normal function
// function Gate({isOpen}) {
//     return isOpen ? <h2>OPEN</h2> : <h2>CLOSE</h2>
// }


// using arrow function 
const Gate = ({isOpen}) => isOpen ? <h2>OPEN</h2> : <h2>CLOSE</h2>


export default Gate;