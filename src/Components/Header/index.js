import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import api from '../../API/api';
import Axios from "axios";

// Components
import MainBody from "../MainBody";
import ListCard from "../ListCard";
import Recommended from "../Recommended";

// CSS
import "./style.css";
// import ListDisplay from '../ListDisplay'
// import List from "../List";

// const style = {
//     color: 'white'
// }

// const style2 = {
//     width: '100%'
// }

class Header extends Component {
    state = {
        page: "",
        loginInfo: {},
        cardComponents: [],
        recievedData: [],
        renderList: false,
        // textarea: '',
        cardClickId: '',
        currentComments: [],
        profileImageUrl: ""
    }

    //
    componentDidMount = () => {
        this.setState({
            page: "cinema",
            loginInfo: JSON.parse(localStorage.getItem('loginInfo')),

        });
        this.apiCall();
        // console.log(JSON.parse(localStorage.getItem('loginInfo')))
        
    }

    //
    handleClick = event => {
        this.setState({
            page: event.target.name
        });
        this.apiCall();
        // console.log("handleClickCheck", this.state);
    }
    
    //
    cardClick = (id, category) => {
        
        // TODO: Refactor this to use the 'getListData' axios call in API - redundant routes on the backend
        Axios.post(`http://localhost:8080/list/${id}/${category}`).then(data => {
            console.log(data)
            this.setState({
                recievedData: data.data,
                renderList: true,
                cardClickId: data.data._id,
                currentComments: data.data.comments
            });
        }).catch(err => {
            console.log(err);
        });
    }
    
    //
    apiCall = () => {
        // console.log("in api call this is state that is passed in", this.state);
        
        let listSearchObject = {
            category: this.state.page,
            username: this.state.loginInfo.username
        }
        
        api.getLists(listSearchObject).then(res => {
            if (res.data === null) {
                this.apiCall();
            } else if (res.data !== null) {
                let userListArray = res.data.lists;
                
                let filteredArray = userListArray.filter(list => list.category === this.state.page);
                console.log("filtered array", filteredArray);
                
                let listsToShow = filteredArray.filter(list => list.pinned === true);
                console.log("listsToShow", listsToShow);
                
                let cardArray = [];

                if (listsToShow.length <= 3) {
                    let count = 0;
                    if (this.state.page === "cinema") {
                        count = 0;
                    } else if (this.state.page === "literature") {
                        count = 4;
                    } else if (this.state.page === "music") {
                        count = 8;
                    }
                    let card = listsToShow.map(list => {
                        console.log(list.category);
                        count++;
                        let id = "listCard" + count;
                        return <ListCard key={id} id={id} onClick={this.cardClick} category={list.category} listId={list._id} listItem={list} />;
                        
                    });
                    this.setState({ cardComponents: card });
                } else {
                    for (var i = 0; i < 4; i++) {
                        //let randomNum = Math.floor((Math.random() * listsToShow.length));
                        let id = ""
                        if (this.state.page === "cinema") {
                            id = "listCard" + (i + 1);
                        } else if (this.state.page === "literature") {
                            id = "listCard" + (i + 5);
                        } else if (this.state.page === "music") {
                            id = "listCard" + (i + 9);
                        }
                        
                        cardArray.push(<ListCard id={id} onClick={this.cardClick} category={listsToShow[i].category} listId={listsToShow[i]._id} listItem={listsToShow[i]} />);
                    }
                    this.setState({ cardComponents: cardArray });
                }
            } else {
                this.setState({ cardComponents: [] });
            }
        });
    }

    //
    uploadProfilePhoto = photoUpload => {
        photoUpload.open();
    }

    //
    changeProfilePicture = photoUpload => {
        if (this.state.loginInfo.profileImageUrl) {
            photoUpload.open();
        }
    }

    //
    checkUploadResult = (error, resultObject) => {
        if (!error && resultObject && resultObject.event === "success") {
            console.log('Done! Here is the image info: ', resultObject.info);

            // Set the new profile photo in localstorage
            // let newLoginInfo = JSON.parse(localStorage.getItem("loginInfo"));
            let newLoginInfo = this.state.loginInfo;
            newLoginInfo.profileImageUrl = resultObject.info.secure_url;
            localStorage.setItem("loginInfo", JSON.stringify(newLoginInfo));

            // Update the profile photo in the database
            const photoData = {
                userId: this.state.loginInfo.id,
                profileImageUrl: resultObject.info.secure_url
            }
            api.addUserPhoto(photoData).then(data => {
                console.log(data);
            }).catch(err => {
                console.log(err.response);
            });

            this.setState({
                profileImageUrl: resultObject.info.secure_url
            });
        }
    }
    
    render() {

        let photoUpload = window.cloudinary.createUploadWidget(
            {
                cloudName: 'dvi7y8bvb',
                uploadPreset: 'aauqtyy6'
            },
            (error, result) => {this.checkUploadResult(error, result)}
        );

        let displayAddPhoto = this.state.loginInfo.profileImageUrl ? "none" : "block";

        // Group of ListDisplays based on which type of list was clicked, each passes in same props
        if (this.state.renderList === true) {
            return (
                // Redirect to List component when a ListCard is clicked
                <Redirect push to={{
                    pathname: "/list/" + this.state.page + "/" + this.state.cardClickId,
                    // Passing in state here doesn't seem to be making it to the List component props
                    state: {listData: this.state.receivedData}
                }}/>
            );
        }
        return (
            <div>
                <div id="userInformation" className="row">


                    <div
                        className="userAvatar"
                        onClick={() => this.changeProfilePicture(photoUpload)}
                        style={{backgroundImage: "url(" + this.state.loginInfo.profileImageUrl + ")"}}
                    >
                        <i id="addPhoto" title="Add Profile Photo" className="fas fa-plus" onClick={() => this.uploadProfilePhoto(photoUpload)} style={{display: displayAddPhoto}}></i>
                    </div>


                    <div className="col userName">
                        <h3 id="hello">Hello, </h3>
                        <h1 id="name">{this.state.loginInfo.firstName}</h1>
                    </div>
                    <Link to="/findFriends">
                        <button className="btn btn-md" style={{ backgroundColor: "#B33434" }}>Find Friends</button>
                    </Link>
                    <Link to="/friends">
                        <button className="btn btn-md" style={{ backgroundColor: "#B33434" }}>View Friends</button>
                    </Link>
                </div>

                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" onClick={this.handleClick}>
                        <button className="nav-link active" id="cinema-tab" data-toggle="tab" name="cinema" role="tab">Cinema</button>
                    </li>
                    <li className="nav-item" onClick={this.handleClick}>
                        <button className="nav-link" id="profile-tab" data-toggle="tab" name="literature" role="tab">Literature</button>
                    </li>
                    <li className="nav-item" onClick={this.handleClick}>
                        <button className="nav-link" id="contact-tab" data-toggle="tab" name="music" role="tab">Music</button>
                    </li>
                    {/* <li className="nav-item" onClick={this.handleClick}>
                        <a className="nav-link" id="friend-tab" data-toggle="tab" name="friends" role="tab">Friends</a>
                    </li> */}
                </ul>

                <div className="tab-content" id="myTabContent">
                    <MainBody page={this.state.page} loginInfo={this.state.loginInfo} cards={this.state.cardComponents} />
                    <Recommended page={this.state.page} cardClick={this.cardClick}/>
                </div>
            </div>
        );
    }
}

export default Header;