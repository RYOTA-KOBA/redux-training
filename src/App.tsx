import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const aaa: () => void = () => {
    console.log('hello');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h1>Hello World</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          onClick={aaa}
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
