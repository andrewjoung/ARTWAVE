import React, {Component} from 'react';
import API from "../../API/api";
import "./style.css";

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
                    {this.state.friends.map(friend => {
                        return <p>{friend.firstName} {friend.lastName}</p>
                    })}
                </div>
            );
        } else {
            return (
                <h3>No friends to display</h3>
            );
        }
    }
}

export default Friends;
