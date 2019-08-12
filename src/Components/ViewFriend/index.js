import React, { Component } from "react";
import MainBody from "../MainBody";
import ListCard from "../ListCard";
import api from '../../API/api';
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import Recommended from "../Recommended";

class ViewFriend extends React.Component {

  state = {
    page: "cinema",
    loginInfo: { username: this.props.match.params.username},
    cardComponents: [],
    recievedData: [],
    renderList: false,
    // textarea: '',
    cardClickId: '',
    currentComments: []
  }

  cardClick = (id, category) => {

    // TODO: Refactor this to use the 'getListData' axios call in API - redundant routes on the backend
    Axios.post(`https://artwave-api.herokuapp.com/list/${id}/${category}`).then(data => {
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

  handleClick = event => {
    this.setState({
      page: event.target.name
    });
    this.apiCall();
    // console.log("handleClickCheck", this.state);
  }
  componentDidMount() {
    this.apiCall()
  }
  apiCall = () => {

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
            return <ListCard id={id} onClick={this.cardClick} category={list.category} listId={list._id} listItem={list} />;

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
  render() {
    if (this.state.renderList === true) {
      return (
        // Redirect to List component when a ListCard is clicked
        <Redirect push to={{
          pathname: "/list/" + this.state.page + "/" + this.state.cardClickId,
          // Passing in state here doesn't seem to be making it to the List component props
          state: { listData: this.state.receivedData }
        }} />
      );
    }
    console.log(this.props.match.params)
    return (
      <div>
        <div id="userInformation" className="row">
          <div className="userAvatar"></div>
          <div className="col userName">
            <h3>Check out your friend, </h3>
            <h1>{this.props.match.params.firstName}</h1>
          </div>
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
          <Recommended />
        </div>
      </div>
    )
  }
}

export default ViewFriend
