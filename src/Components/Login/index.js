import React, {Component} from 'react';
import "./style.css";
import {Link} from "react-router-dom";

class Login extends Component {
    state = {
        username: "",
        password: ""
    };

    
    
    render() {
        return (
            <div>
                <h1><span id="art">ART</span><span id="wave">WAVE</span></h1>
                <form className="text-center" action="/users" method="GET">
                    <div id="inputBox">
                        <input className="form-control my-5" id="username" placeholder="Username"/>
                        <input className="form-control" id="pw" type="password" placeholder="Password"/>
                    </div>
                    <button className="btn btn-sm" id="login" type="submit">Login</button>
                    <Link to="/register">
                        <button type="button" className="btn btn-sm" id="createAcct">Create Account</button>
                    </Link>
                </form>
            </div>
        );
    }
}

export default Login;