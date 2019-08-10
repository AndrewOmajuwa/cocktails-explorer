import React from 'react';
import logo from './logo.svg';
import './App.css';
import CockTailCategories from './components/CockTailList';
import CockTailList from './components/CockTailCategory';
import SearchName from './components/SearchName';
import CockTailDetails from './components/CockTailDetails'
import Homepage from './components/HomePage'
import {Route} from 'react-router-dom'
import RandomCockTail from './components/RandomCockTail';
import CocktailCategoryDetails from './components/CocktailCategoryDetails';

function App() {
  return (
    <div className="App">
      <main className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Route exact path='/' component={Homepage} /> 
        <Route exact path='/random-cocktail' component={RandomCockTail} /> 
        <Route exact path="/cocktail-categories" component={CockTailList} />
        <Route exact path="/search" component={CockTailCategories} />
        <Route exact path="/search-cocktail" component={SearchName} />
        <Route exact path="/cocktails/:cocktail" component={CockTailDetails} />
        <Route exact path="/cocktail-categories/:category" component={CocktailCategoryDetails} />
      </main>
    </div>
  );
}

export default App;
