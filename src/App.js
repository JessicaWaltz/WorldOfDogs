import './App.css';
import DisplayDogs from './components/DisplayDogs.js';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Submit from './components/addDog.js';

function App() {
  return (
    <div className="App">
      <Submit/>
      <DisplayDogs/>
    </div>
  );
}

export default App;
