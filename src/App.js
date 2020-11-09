import './App.css';
import DisplayDogs from './components/displayDogs.js';
import React from "react";
import SearchDog from './components/SearchDogs.js';
import DisplaySearch from './components/displaySearch.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Submit from './components/addDog.js';
import HomePage from './components/homePage.js';
import logo from "./img/dogLogo02.png";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav-grid-container">
            <div className="nav-grid-title"><Link to="/" className="dont-link"><img className="logo" src={logo} alt="World of Dogs"/></Link></div>
            <div className="nav-grid-options">
              <div><Link to="/view" className="dont-link">VIEW</Link></div>
              <div><Link to="/add" className="dont-link">ADD</Link></div>
              <div><Link to="/search" className="dont-link">SEARCH</Link></div>
            </div>
        </div>
        <Switch>
          <Route exact={true} path="/" component={HomePage}>
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
