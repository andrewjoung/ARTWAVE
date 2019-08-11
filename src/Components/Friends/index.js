import React, {Component} from 'react';
import API from "../../API/api";
import "./style.css";
import {Link} from "react-router-dom";

class Friends extends Component {
    state = {
        id: JSON.parse(localStorage.getItem("loginInfo")).id,
        friendsList: JSON.parse(localStorage.getItem("loginInfo")).friends,
        friends: [],
        hasFriends: true
    }

    componentDidMount = () => {
        API.getUserFriends(this.state.id).then(res => {
            console.log(res.data);
            if (res.data.friends.length) {
                this.setState({
                    hasFriends: true,
                    friends: res.data.friends
                });
            } else {
                this.setState({hasFriends: false});
            }
        }).catch(err => {
            console.log(err);
        });
    }
    
    render = () => {
        if (this.state.hasFriends) {        
            return (
                <div>
                    <div className="container">
                        <header>
                            <h1>Your Friends</h1>
                            <Link to="/main">
                                <button className="btn btn-md" id="main" style={{backgroundColor: "#B33434"}}>Main</button>
                            </Link>
                        </header>
                        <hr/>
                    </div>
                    <div className="container" id="friendContainer">
                        {this.state.friends.map(friend => {
                            return (
                                <div className="friendBox">
                                    <div className="userAvatar"></div>
                                    <p>{friend.firstName} {friend.lastName}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            );
        } else {
            return (
                // TODO: flesh this section out more - low priority
                <h3>No friends to display</h3>
            );
        }
    }
}

export default Friends;
