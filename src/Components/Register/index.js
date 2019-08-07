import React, {Component} from 'react';
import "./style.css";
import {Link, Redirect} from "react-router-dom";
import API from "../../API/api.js";

class Register extends Component {
    state = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
        errors: {},
        registerSuccesful: false
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
            password: this.state.password,
            password2: this.state.passwordConfirm
        };
        // console.log(newUser);
        API.registerUser(newUser).then(res => {
            console.log("inside api promise!");
            if (res.request.status === 200) {
                this.setState({
                    registerSuccesful: true,
                    username: res.data.username
                });
            }
            console.log(res);
        }).catch(function(err) {
            console.log(err);
        });
    }    
    
    render() {
        const {errors} = this.state;
        if (!this.state.registerSuccesful) {
            return (
                <div>
                    <h1><span id="art">ART</span><span id="wave">WAVE</span></h1>
                    <p>Register for a new account</p>
                    <form className="text-center">
                        <div id="inputBox">
                            <input value={this.state.firstName} className="form-control" name="firstName" type="text" placeholder="First Name" onChange={this.handleInputChange} error={errors.firstName}/>
                            <input value={this.state.lastName} className="form-control" name="lastName" type="text" placeholder="Last Name" onChange={this.handleInputChange} error={errors.lastName}/>
                            <input value={this.state.username} className="form-control" name="username" type="text" placeholder="Username"onChange={this.handleInputChange} error={errors.username}/>
                            <input value={this.state.email} className="form-control" name="email" type="email" placeholder="Email"onChange={this.handleInputChange} error={errors.email}/>
                            <input value={this.state.password} className="form-control" name="password" type="password" placeholder="Password"onChange={this.handleInputChange} error={errors.password}/>
                            <input value={this.state.passwordConfirm} className="form-control" name="passwordConfirm" type="password" placeholder="Confirm Password"onChange={this.handleInputChange} error={errors.password2}/>
                        </div>
                        <button type="submit" className="btn btn-sm" id="createAcct" onClick={this.handleFormSubmit}>Create Account</button>
                    </form>
                </div>
            );
        } else {
            return (
                <Redirect to="/login" username={this.state.username}/>
            )
        }
    }
}

export default Register;