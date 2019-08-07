import React, { Component } from "react";
import "./style.css";
import MainBody from "../MainBody";
import ListCard from "../ListCard";
import api from '../../API/api';

class Header extends Component {

    state = {
        page:"",
        loginInfo:{},
        cardComponents:[]
    }

    componentDidMount = () => {
        this.setState({page:"cinema", loginInfo: this.props.location.state.loginInfo});
        //console.log("initial state = " + this.state.page);
        //console.log("in the header component", this.state.loginInfo)
        
        console.log("component did mount");

        this.apiCall();
    }

    handleClick = event => {
        //console.log(event.target.name);
        this.setState({
            page: event.target.name
        });

        this.apiCall();

        console.log("handleClickCheck", this.state);

    }

    apiCall = () => {
        //console.log("clicked nav state is now = " + this.state.page);
        let listSearchObject = {
            category: this.state.page,
            username: this.props.location.state.loginInfo.username
        }

        api.getLists(listSearchObject).then(res => {
            //console.log("skippity do", res.data);
    
            if(res.data !== null) {
                console.log("entering");
                let userListArray = res.data.lists;
                let filteredArray = userListArray.filter(list => list.category === this.state.page);
                console.log("filtered array", filteredArray);
                let listsToShow = filteredArray.filter(list => list.items.length > 0);
                console.log("listsToShow", listsToShow);
        
                //console.log("inside if", listsToShow);
        
                let card = listsToShow.map(list => {
                    console.log(list);
                    return <ListCard listItem={list} />;
                });
    
                //console.log(card);
                this.setState({cardComponents: card});
    
            } else {
                console.log("null");
                this.setState({cardComponents: []});
            }
    
        });
    }

    render() {
        //console.log("in the header component", this.state.loginInfo);
        return (

            <div>
                <div id="userInformation">

                </div>

                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" onClick={this.handleClick}>
                        <a className="nav-link active" id="cinema-tab" data-toggle="tab" name="cinema" role="tab">Cinema</a>
                    </li>
                    <li className="nav-item" onClick={this.handleClick}>
                        <a className="nav-link" id="profile-tab" data-toggle="tab" name="literature" role="tab">Literature</a>
                    </li>
                    <li className="nav-item" onClick={this.handleClick}>
                        <a className="nav-link" id="contact-tab" data-toggle="tab" name="music" role="tab">Music</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">

                    <MainBody page={this.state.page} loginInfo={this.state.loginInfo} cards={this.state.cardComponents}/>
                    {/* {this.setComponentTimeout} */}
                </div>
            </div>
        );
    }
}

export default Header;