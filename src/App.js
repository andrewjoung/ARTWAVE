import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login}/>
        <Route exact path="/register" component={Register}/>
      </div>
    </Router>
  );
}

export default App;
