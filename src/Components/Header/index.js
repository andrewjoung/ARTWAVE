import React, { Component } from "react";
import "./style.css";
import MainBody from "../MainBody";
import ListCard from "../ListCard";
import api from '../../API/api';
import ProfileInfo from "../ProfileInfo";
// import FindFriends from "../FindFriends";
import { Link } from "react-router-dom";
import Axios from "axios";
import ListDisplay from '../ListDisplay'
const style = {
    color: 'white'
}
const style2 = {
    width: '100%'
}

class Header extends Component {

    state = {
        page: "",
        loginInfo: {},
        cardComponents: [],
        recievedData: [],
        renderList: false,
        textarea: ''
    }

    componentDidMount = () => {
        this.setState({ page: "cinema", loginInfo: JSON.parse(localStorage.getItem('loginInfo')) });
        //console.log("initial state = " + this.state.page);
        //console.log("in the header component", this.state.loginInfo)

        console.log("component did mount");
        console.log(JSON.parse(localStorage.getItem("loginInfo")));

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
    handleChange = (event) => {

        console.log(event.target)
        const { name, value } = event.target;

        // console.log(event.target)

        // Updating the input's state
        this.setState({
            [name]: value
        });
    }

    cardClick = (id, category) => {
        Axios.post(`http://localhost:8080/list/${id}/${category}`).then(data => {
            // console.log(data.data)
            this.setState({ recievedData: data.data, renderList: true })
        })
    }

    sendComment = ()=>{
        console.log('this is checking')
    }

    apiCall = () => {
        //console.log("clicked nav state is now = " + this.state.page);

        console.log("in api call this is state that is passed in", this.state);

        let listSearchObject = {
            category: this.state.page,
            username: this.state.loginInfo.username
        }

        api.getLists(listSearchObject).then(res => {
            // for(var i = 0; i < res.data.lists.length; i++){
            //     console.log(res.data.lists[i]._id)
            // }

            if (res.data === null) {
                this.apiCall();
            } else if (res.data !== null) {
                // console.log(res.data)
                // console.log("entering");
                let userListArray = res.data.lists;
                let filteredArray = userListArray.filter(list => list.category === this.state.page);
                console.log("filtered array", filteredArray);
                let listsToShow = filteredArray.filter(list => list.pinned === true);
                console.log("listsToShow", listsToShow);

                //console.log("inside if", listsToShow);



                let cardArray = [];

                if (listsToShow.length <= 3) {
                    let card = listsToShow.map(list => {
                        console.log(list.category);
                        return <ListCard onClick={this.cardClick} category={list.category} listId={list._id} listItem={list} />;

                    });

                    this.setState({ cardComponents: card });
                } else {
                    for (var i = 0; i < 4; i++) {
                        //let randomNum = Math.floor((Math.random() * listsToShow.length));
                        cardArray.push(<ListCard onClick={this.cardClick} category={listsToShow[i].category} listId={listsToShow[i]._id} listItem={listsToShow[i]} />);
                    }
                    this.setState({ cardComponents: cardArray });

                }


                //card(listsToShow);

                //console.log(card);

            } else {
                // console.log("null");
                this.setState({ cardComponents: [] });
            }

        });
    }

    friendsTest = [
        "friend1",
        "friend2",
        "friend3",
        "friend4"
    ];

    render() {
        /// Group of ListDisplays based on which type of list was clicked, each passes in same props
        if (this.state.renderList === true) {
            let array = this.state.recievedData
            // Return of list items if cinema is clicked on
            if (this.state.page === 'cinema')
                return (
                    <div className="container">
                        {array.map(item => (
                            <ListDisplay synopsis={item.synopsis} id={item._id} name={item.title} image={item.artUri} author={item.director} />
                        ))}

                        <div className='container-fluid'>
                            <textarea onChange={this.handleChange} name="textarea" value={this.state.textarea} style={style2}></textarea>
                            <button onClick={this.sendComment} style={style2} className="btn btn-success">Submit Comment</button>
                        </div>
                    </div>

                )
            // Return of list items if cinema literature is clicked
            else if (this.state.page === 'literature') {
                return (
                    <div className='container'>
                        {array.map(item => (
                            <ListDisplay synopsis={item.synopsis} id={item._id} name={item.title} image={item.artUri} author={item.author} />
                        ))}
                        <div className='container-fluid'>
                            <textarea name="textarea" onChange={this.handleChange} value={this.state.textarea} style={style2}></textarea>
                            <button onClick={this.sendComment} className="btn btn-success form-block"></button>
                        </div>
                    </div>
                )
            }
            // Return of list items if not cinema or literature (aka has to be music, either songs or albums)
            else {
                console.log(array);
                return (
                    <div className='container'>
                        {array.map(item => (
                            <ListDisplay id={item._id} image={item.artUri} artist={item.artist} name={item.albumTitle} />
                        ))}
                        <div className='container-fluid'>
                            <textarea onChange={this.handleChange} name="textarea" value={this.state.textarea} style={style2}></textarea>
                            <button onClick={this.sendComment} className="btn btn-success form-block">Submit Comment</button>
                        </div>

                    </div>
                )
            }
        }
        return (

            <div>
                <div id="userInformation" className="row">
                    <div className="userAvatar">

                    </div>
                    <div className="col userName">
                        <h3>Hello, </h3>
                        <h1>{this.state.loginInfo.firstName}</h1>
                    </div>
                    <Link to="/findFriends">
                        <button className="btn btn-primary">Find Friends</button>
                    </Link>
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

                    <MainBody page={this.state.page} loginInfo={this.state.loginInfo} cards={this.state.cardComponents} />
                    {/* {this.setComponentTimeout} */}
                </div>
            </div>
        );
    }
}

export default Header;