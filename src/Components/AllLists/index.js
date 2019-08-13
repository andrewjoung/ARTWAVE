import React from 'react'
import Axios from 'axios';
import api from '../../API/api';
import ListCard from '../ListCard'
import { Link, Redirect } from "react-router-dom";

class AllLists extends React.Component {
  state = {
    page:this.props.match.params.category,
    loginInfo: JSON.parse(localStorage.getItem('loginInfo')),
    lists: [],
    recievedData: [],
    renderList: false,
    // textarea: '',
    cardClickId: '',
    currentComments: []
  }

  componentDidMount() {
    this.click()
  }

  click = () => {
    console.log(this.state.page)
    let listarray = []
    let searchO = { category: "cinema", username: this.state.loginInfo.username }
    api.getLists(searchO).then(data => {
      
      for(var i = 0; i < data.data.lists.length; i++){
        console.log(data.data.lists[i])
        if(data.data.lists[i].category === this.state.page){
          
          listarray.push(data.data.lists[i])
        }
      }
      console.log(listarray)
      
      this.setState({ lists: listarray })
      
    })
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


    return (
      <div>
        <h1>working</h1>
        {this.state.lists.map(item => (
          <ListCard onClick={this.cardClick} category={item.category} listId={item._id} listItem={item} />
        ))}
      </div>
    )
  }
}

export default AllLists;
