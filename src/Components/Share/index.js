import React, {Component} from 'react';
import { Dropdown } from "semantic-ui-react";
import API from "../../API/api.js";
import "./style.css";

class Share extends Component {
    state = {
        listId: this.props.id,
        friends: [],
        selectedFriend: "",
        selectedName: ""
    }

    //
    componentDidMount = () => {
        API.getFriendData(JSON.parse(localStorage.getItem("loginInfo")).id).then(res => {
            const friendObjArray = res.data.friends.map(friend => {
                const name = friend.firstName + " " + friend.lastName;
                return {
                    id: friend._id,
                    key: friend._id,
                    text: name,
                    value: name
                }
            });
            this.setState({
                friends: friendObjArray
            });
        }).catch(err => {
            console.log(err);
        });
    }

    //
    changeSelection = event => {
        this.setState({
            selectedFriend: event.target.id,
            selectedName: event.target.innerText
        });
    }

    //
    share = event => {
        event.preventDefault();
        const recData = {
            friendId: this.state.selectedFriend,
            listId: this.state.listId
        }
        API.recommendList(recData).then(res => {
            console.log(res);
            alert("You shared this list with " + this.state.selectedName + "!");
        }).catch(err => {
            console.log(err);
        });
    }

    render = () => {
        return (
            <div>
                {/* TODO: Make this a datalist of current friends */}
                {/* <button type="button" className="btn btn-primary">Recommend to friend</button> */}
                <div id="shareList">
                    <h4>Share This List With a Friend</h4>
                    {/* onChange only fires when clicking the space next to the text in the dropdown, not the text itself */}
                    <Dropdown
                        onChange={this.changeSelection}
                        placeholder="Select Friend"
                        fluid
                        search
                        selection
                        options={this.state.friends}
                        style={{color: "black", width: "175px"}}
                    />
                    <button type="submit" className="btn" onClick={this.share}>Share</button>
                </div>
            </div>
        )
    }
}

export default Share;
