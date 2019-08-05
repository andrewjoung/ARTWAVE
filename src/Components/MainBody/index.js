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

        //TODO: 
        //Use JSON dummy data => 
        // if(this.state.category === cinema) {
        //      newArray = resultOfAjaxListRequest.filter(where type = cinema)
        //} else if (cateogry === literature) {
        //      newARray = resultOfAjaxListRequest.filter(where type = literature)
        //} else {
        //      newARray= resultOfAjaxListRequest.filter(where type = music)
        //}

        /*
            topPinned = newARray.filter(where stared = true);
        
            => some way to only display 4 pinned cards 
                => displaying card with art 
        
        
        */

        //TODO: 
        //repeat process above for recommended
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