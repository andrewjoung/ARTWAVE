import React, {Component} from 'react'
import "./style.css";
import API from "../../API/api";


class FindFriends extends Component {
    state = {
        loginInfo: JSON.parse(localStorage.getItem("loginInfo")),
        friends: []
    }    

    componentDidMount = () => {
        API.getFriends(this.state.loginInfo.id).then(res => {
            console.log(res.data);
            this.setState({
                friends: res.data
            });
        }).catch(err => {
            console.log(err);
        });
    }

    addFriend = event => {
        console.log(event.target.name);
        this.setState(
            {friends: this.state.friends.push(event.target.name)}
        )
        const addFriendData = {
            userId: this.state.loginInfo.id,
            friendId: event.target.name
        };
        API.addFriend(addFriendData).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        });
    }

    render =() => {
        return (
            <div>
                <h2>Find Friends!</h2>
                <hr/>
                <h3>Available Friends:</h3>
                <ul>
                    {this.state.friends.map(friend => {
                        return (
                            <div>
                                <li>
                                    {friend.firstName} {friend.lastName}
                                    <button
                                        name={friend._id}
                                        className="btn btn-sm btn-primary"
                                        onClick={this.addFriend}
                                        style={{fontSize: ".75rem", padding: ".15rem .5rem", marginTop: "0px", marginBottom: "0px"}}>
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
