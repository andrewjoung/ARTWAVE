import React from 'react';
import './App.css';
import Header from "./Components/Header";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import CreateList from "./Components/CreateList"
import Search from '../src/Components/Search';
import Friends from "./Components/Friends";
import FindFriends from "./Components/FindFriends";
import List from "./Components/List";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/main" component={Header} />
        <Route exact path="/create-list" component={CreateList} />
        <Route exact path="/search" component={Search}/>
        <Route exact path="/friends" component={Friends}/>
        <Route exact path="/findFriends" component={FindFriends}/>
        <Route path ="/list/:category/:id" component={List}/>
      </div>
    </Router>
  );
}

export default App;
