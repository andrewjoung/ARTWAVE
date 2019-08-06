import React from 'react';
import './App.css';
import Header from "./Components/Header";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import CreateList from "./Components/CreateList"

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/main" component={Header} />
        <Route exact path="/create-list" component={CreateList} />
      </div>
    </Router>
  );
}

export default App;
