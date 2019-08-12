import React, {Component} from 'react';
import { Dropdown } from "semantic-ui-react";

const shareFriends = [
    { key: "John", text: "John", value: "John" },
    { key: "Joe", text: "Joe", value: "Joe" },
    { key: "Jason", text: "Jason", value: "Jason" },
    { key: "Frank", text: "Frank", value: "Frank" },
    { key: "Jane", text: "Jane", value: "Jane" }
]

class Share extends Component {
    state = {
        friends: JSON.parse(localStorage.getItem("loginInfo")).friends
    }

    componentDidMount = () => {

    }


    render = () => {
        return (
            <div>
                <p>List of friends populated from localstorage</p>
                <p>button to share</p>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                {/* TODO: Make this a datalist of current friends */}
                {/* <button type="button" className="btn btn-primary">Recommend to friend</button> */}
                <Dropdown
                    placeholder="Select Friend"
                    fluid
                    search
                    selection
                    options={shareFriends}
                />
            </div>
        )
    }
}

export default Share;
