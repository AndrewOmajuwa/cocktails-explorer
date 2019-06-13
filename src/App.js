import React from 'react';
import logo from './logo.svg';
import './App.css';
import CockTailCategories from './components/CockTailCategories';
import CockTailList from './components/CockTailsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CockTailCategories />
        <CockTailList />
      </header>
    </div>
  );
}

export default App;
