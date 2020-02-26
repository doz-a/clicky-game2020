import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Timer from './components/Timer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
          Welcome to the klicky game
        
        <Timer />
        <a
          className="App-link"
          href="https://github.com/doz-a/clicky-game2020"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repo
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;
