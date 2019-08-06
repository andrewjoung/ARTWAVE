import React from 'react';
import './App.css';
<<<<<<< HEAD
import Search from './Components/Search'

function App() {
  return (
    <div className="App">
      <Search/>
    </div>
=======
import Header from "./Components/Header";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/main" component={Header} />
      </div>
    </Router>
>>>>>>> 5aadb10964921385828eca5f9b405eccdc8259dc
  );
}

export default App;
