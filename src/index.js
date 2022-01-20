import React from 'react';
import ReactDOM from 'react-dom';

//first component
function Hello(){
  return <h1>Hello ,world !</h1>
}



ReactDOM.render(<Hello></Hello>, document.getElementById("root"));