import React from 'react';
import './App.css';
import Header from "./Components/Header";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Search from '../src/Components/Search';
import Lists from './Components/Lists'

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/main" component={Header} />
        <Route exact path="/search" component={Search}/>
        <Route exact path = '/lists' component = {Lists}/>
      </div>
    </Router>
  );
}

export default App;
