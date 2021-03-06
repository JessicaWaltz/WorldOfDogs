import './App.css';
import DisplayDogs from './components/displayDogs.js';
import React from "react";
import DisplaySearch from './components/displaySearch.js'
import SearchDog from './components/searchDogs.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import Submit from './components/addDog.js';
import HomePage from './components/homePage.js';
import logo from "./img/dogLogo02.png";
import RandomDog from "./components/randomDog.js";
import NotFound from "./components/notFound.js";
import SortDogs from "./components/sortDogs.js";

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
              <div><Link to="/random" className="dont-link">RANDOM</Link></div>
              <div><Link to="/sort" className="dont-link">SORT</Link></div>
            </div>
        </div>
        <Switch>
          <Route exact={true} path="/">
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
          <Route path="/random">
            <RandomDog/>
          </Route>
          <Route path="/sort">
            <SortDogs/>
          </Route>
          <Route path="/404">
            <NotFound/>
          </Route>
          <Redirect to="/404"></Redirect>
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
