import './App.css';
import DisplayDogs from './components/DisplayDogs.js';
import React from "react";
import SearchDog from './components/searchDogs.js';
import DisplaySearch from './components/DisplaySearch.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Submit from './components/addDog.js';
import HomePage from './components/HomePage.js'

function App() {
  return (
    <div className="App">
      <Router>
        nav should go here
        <Switch>
          <Route exact="true" path="/">
            <HomePage/>
          </Route>
          <Route path="/view">
            <DisplayDogs/>
          </Route>
          <Route path="/add">
            <Submit/>
          </Route>
          <Route path="/search">
            <SearchDog/>
            <DisplaySearch/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
