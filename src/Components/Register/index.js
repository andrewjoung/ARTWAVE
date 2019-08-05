import React, {Component} from 'react';
import "./style.css";
import {Link} from "react-router-dom";
import API from "../../API/api.js";

class Register extends Component {
    state = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        passwordConfirm: ""
    };

    handleInputChange = event => {
        //console.log(event.target);
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        };
        // console.log(newUser);
        API.registerUser(newUser).then(function(data) {
            console.log("inside api promise!");
            console.log(data.data);
        });
    }    
    
    render() {
        return (
            <div>
                <h1><span id="art">ART</span><span id="wave">WAVE</span></h1>
                <p>Register for a new account</p>
                <form className="text-center">
                    <div id="inputBox">
                        <input value={this.state.firstName} className="form-control" name="firstName" type="text" placeholder="First Name" onChange={this.handleInputChange}/>
                        <input value={this.state.lastName} className="form-control" name="lastName" type="text" placeholder="Last Name" onChange={this.handleInputChange}/>
                        <input value={this.state.username} className="form-control" name="username" type="text" placeholder="Username"onChange={this.handleInputChange}/>
                        <input value={this.state.email} className="form-control" name="email" type="email" placeholder="Email"onChange={this.handleInputChange}/>
                        <input value={this.state.password} className="form-control" name="password" type="password" placeholder="Password"onChange={this.handleInputChange}/>
                        <input value={this.state.passwordConfirm} className="form-control" name="passwordConfirm" type="passwordConfirm" placeholder="Confirm Password"onChange={this.handleInputChange}/>
                    </div>
                    {/* <Link to="/"> */}
                        <button type="submit" className="btn btn-sm" id="createAcct" onClick={this.handleFormSubmit}>Create Account</button>
                    {/* </Link> */}
                </form>
            </div>
        );
    }
}

export default Register;