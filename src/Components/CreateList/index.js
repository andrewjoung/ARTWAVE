import React, { Component } from 'react';
import './style.css';
import api from '../../API/api';
import Form from '../Search';

class CreateList extends Component {

    state = {
        category:"",
        loginInfo:{},
        listTitle:"",
        listInfo:{},
        listPinned : false,
        titleSubmitted: false,
    }

    componentDidMount = () => {
        console.log(this.props.location.state);
        console.log("Inside create list", this.props.location.state.loginInfo);
        this.setState({loginInfo: this.props.location.state.loginInfo, category: this.props.location.state.category});
    }

    handleChange = event => {
        const value = event.target.value;
        this.setState({listTitle: value});
    }

    handleClick = event => {
        event.preventDefault();

        console.log("Make API calls");

        let listData = {
            username: this.state.loginInfo.username,
            title: this.state.listTitle,
            category: this.state.category,
            pinned: this.state.listPinned
        }

        api.createList(listData).then(res => {
            console.log(res);
            let listToUse = {
                title: res.data.title,
                id: res.data._id,
                category: res.data.category
            }

            this.setState({listInfo: listToUse, titleSubmitted: true});
        });
    }

    changeFavoriteColor = event => {
        if(this.state.listPinned === false) {
            event.target.id = "clickedFavoriteIcon";
            this.setState({listPinned: true});
            console.log(event.target.className);
        } else {
            event.target.id = "favoriteIcon";
            this.setState({listPinned: false});
        }
    }

    render() {
        console.log("The state of create list", this.state);
        if(this.state.titleSubmitted === false) {
            return(
                <div className="container">
                    <form className="text-center" action="#!">
    
                        <p className="h4 mb-4">create a new <span style={{color: "#B33434"}}>{this.state.category}</span> list</p>
    
                        <input value={this.state.listTitle} name="title" type="text" onChange={this.handleChange} id="listTitle" className="form-control mb-4" placeholder="Title" />
    
                        <i className="fas fa-star fa-lg" id="favoriteIcon" onClick={this.changeFavoriteColor}></i>
    
                    </form>

                    <button className="btn btn-block my-4" id="createList" type="submit" onClick={this.handleClick} disabled={!this.state.listTitle} style={{backgroundColor: "#B33434"}}>Create List</button>
                </div>
            );
        } else if (this.state.titleSubmitted === true) {
            return (
                <Form list={this.state.listInfo}/>
            );
        } 

    }

}

export default CreateList;