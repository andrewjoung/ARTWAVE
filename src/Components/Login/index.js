import React, {Component} from 'react';
import "./style.css";
import {Link, Redirect} from "react-router-dom";
import API from "../../API/api.js";

class Login extends Component {
    state = {
        username: "",
        password: "",
        loggedIn: false,
        loginInfo: {}
    };

    // componentDidMount = () => {
    //     console.log(this.props.username);
    //     this.setState({
    //         username: this.props.username
    //     });
    // }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const loginAttempt = {
            username: this.state.username,
            password: this.state.password
        }
        API.loginUser(loginAttempt).then(res => {
            console.log(res.data);
            this.setState({
                loggedIn: true,
                loginInfo: res.data
            });
        }).catch(function(err) {
            console.log(err.response);
        });
    };
    
    render() {
        if (!this.state.loggedIn) {
            return (
                <div>
                    <h1><span id="art">ART</span><span id="wave">WAVE</span></h1>
                    <form className="text-center">
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
        } else {
            console.log("login page passing data", this.state.loginInfo);
            return (
                // <Header loginInfo={this.state.loginInfo} />
                <Redirect to={{ pathname: "/main", state: {loginInfo: this.state.loginInfo}}}>
                    
                </Redirect>
            );
        }
    }
}

export default Login;