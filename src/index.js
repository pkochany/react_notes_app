import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// to już tu było domyślnie
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// this is not actual element
// this is an object representation of an element
const desc = 'I just learned how to create a React node and Render it.';
const myTitleID = 'main-title';
const name = 'Piotr';

// title below is a JSX expression which is allways surrounded by curly braces
// opening curly braces inside JSX exits JSX and enters JS.
// when adding class to element you have to use className because class
// is reserved in JS
const header = (
  <header>
    <h1 id={myTitleID}>{ name }'s First React Element!</h1>
    {/* here is className instead of class */}
    <p className="some-class">{ desc }</p>
  </header>
);

function Header() {
  return (
    <header>
      
    </header>
  );
}

// result will be:
// <h1 id="main-title" title="This is a title.">My first React Element!</h1>

ReactDOM.render(
  header,
  document.getElementById('root')
);