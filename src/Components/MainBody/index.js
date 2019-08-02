import React, { Component } from 'react';
import "./style.css";

class MainBody extends Component {

    state = {
        category:this.props.page
    }

    componentDidMount() {
        //TODO: 
        //do ajax call to database
        //retrieve list based on category
        //filter user list based on which lists are "pinned"
        //filter recommendations based on whih lists are "pinned"

        //TODO:
        //create API route for database
        //get lists 
        //get recommendations
    }

    render() {
        return(
            <div id="mainBody">
                returning main body and category is {this.props.page}
            </div>
        );
    }
}

export default MainBody;