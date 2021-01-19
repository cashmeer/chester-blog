import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BlogDetail } from './components/BlogDetail/BlogDetail';

function textClick() {
    return alert("hahahahahahah")
}


function App() {
  return (
    <div className="App">
      <BlogDetail clickHandler={textClick}></BlogDetail>
      <header className="App-header">
        <img src={"https://cdn141.picsart.com/317732747536211.png"} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
  );
}

export default App;
