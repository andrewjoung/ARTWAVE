import React, {Component} from 'react'
import {Link} from "react-router-dom";
import "./style.css";
import API from "../../API/api";


class FindFriends extends Component {
    state = {
        loginInfo: JSON.parse(localStorage.getItem("loginInfo")),
        friends: [],
        // TODO: Add a list of logged in user's current friends to avoid displaying them to the user to add
        currentFriends: JSON.parse(localStorage.getItem("loginInfo")).friends
    }    

    componentDidMount = () => {
        API.getFriends(this.state.loginInfo.id).then(res => {
            let userName = []
            // console.log(res.data);
            for(var i = 0; i < res.data.length; i++){
                if(res.data[i].username !== JSON.parse(localStorage.getItem('loginInfo')).username){
                    userName.push(res.data[i])
                }
            }
            // console.log(userName)
            this.setState({
                friends: userName
            });
        }).catch(err => {
            console.log(err);
        });
    }

    addFriend = event => {
        const friendId = event.target.name;
        // console.log(friendId);
        const addFriendData = {
            userId: this.state.loginInfo.id,
            friendId
        };
        API.addFriend(addFriendData).then(res => {
            // console.log(res.data);

            let newLoginInfo = this.state.loginInfo;
            newLoginInfo.friends.push(friendId);
            // console.log(newLoginInfo);
            localStorage.setItem("loginInfo", JSON.stringify(newLoginInfo));

            const newCurrent = this.state.currentFriends;
            newCurrent.push(friendId);
            // console.log(newCurrent);

            this.setState({
                currentFriends: newCurrent
            });

        }).catch(err => {
            console.log(err);
        });
    }

    render =() => {
        return (
            <div className="container">
                <h1>Find Friends!</h1>
                <Link to="/main">
                    <button className="btn btn-md" id="main" style={{ backgroundColor: "#B33434" }}>Main</button>
                </Link>
                <hr/>
                <h3>Available Friends:</h3>
                <ul>
                    {this.state.friends.filter(friendObj => !this.state.currentFriends.includes(friendObj._id)).map(friend => {
                        return (
                            <div key={friend._id}>
                                <li>
                                    {friend.firstName} {friend.lastName}
                                    <button
                                        name={friend._id}
                                        className="btn btn-sm"
                                        onClick={this.addFriend}
                                        style={{fontSize: ".75rem", padding: ".15rem .5rem", marginTop: "0px", marginBottom: "0px", backgroundColor: "#e54242"}}>
                                            ADD
                                    </button>
                                </li>;
                                
                            </div>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default FindFriends;
