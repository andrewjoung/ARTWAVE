import React, {Component} from 'react';
import "./style.css";
import {Link} from "react-router-dom";
import API from "../../API/api.js";

class Login extends Component {
    state = {
        username: "",
        password: ""
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.loginUser({
            username: this.state.username,
            password: this.state.password
        }).then(function(data) {
            console.log(data.data);
        })
    };
    
    render() {
        return (
            <div>
                <h1><span id="art">ART</span><span id="wave">WAVE</span></h1>
                <form className="text-center" action="/users" method="GET">
                    <div id="inputBox">
                        <input value={this.state.username} className="form-control my-5" name="username" placeholder="Username" onChange={this.handleInputChange}/>
                        <input value={this.state.password} className="form-control" name="password" type="password" placeholder="Password" onChange={this.handleInputChange}/>
                    </div>
                    <button className="btn btn-sm" id="login" type="submit" onClick={this.handleFormSubmit}>Login</button>
                    <Link to="/register">
                        <button type="button" className="btn btn-sm" id="createAcct">Create Account</button>
                    </Link>
                </form>
            </div>
        );
    }
}

export default Login;