import React from 'react';
import './App.css';
import Header from "./Components/Header";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import CreateList from "./Components/CreateList"
import Search from '../src/Components/Search';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" compoent={Login}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/main" component={Header} />
        <Route exact path="/create-list" component={CreateList} />
        <Route exact path="/search" component={Search}/>
      </div>
    </Router>
  );
}

export default App;
