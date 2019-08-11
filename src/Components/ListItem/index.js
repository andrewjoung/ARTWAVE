import React, { Component } from 'react'
import "./style.css";
import API from "../../API/api.js";
import MovieListItem from "../MovieListItem";
import MusicListItem from "../MusicListItem";
import BookListItem from "../BookListItem";

class ListItem extends Component {
    state = {
        modalId: `a${this.props.id}`,
        modalIdRef: `#a${this.props.id}`,
        itemId: this.props.id,
        category: this.props.category,
        itemData: {}
    }

    //
    componentDidMount = () => {
        // axios call to get specific item from correct collection
        const category = this.state.category;
        if (category === "cinema") {
            API.getMovieItem(this.state.itemId).then(movieData => {
                console.log(movieData);
                this.setState({itemData: movieData.data});
            }).catch(err => {
                console.log(err);
            });
        } else if (category === "music") {
            API.getMusicItem(this.state.itemId).then(musicData => {
                console.log(musicData);
                this.setState({itemData: musicData.data});
            }).catch(err => {
                console.log(err);
            });
        } else if (category === "literature") {
            API.getBookItem(this.state.itemId).then(bookData => {
                console.log(bookData);
                this.setState({itemData: bookData.data});
            }).catch(err => {
                console.log(err);
            });
        }
    }

    //
    render = () => {        
        if (this.state.itemData) {
            if (this.state.category === "cinema") {
                return <MovieListItem movieData={this.state.itemData} modalId={this.state.modalId} modalRef={this.state.modalIdRef}/>;
            } else if (this.state.category === "music") {
                return <MusicListItem musicData={this.state.itemData} modalId={this.state.modalId} modalRef={this.state.modalIdRef}/>;
            }
            return <BookListItem bookData={this.state.itemData} modalId={this.state.modalId} modalRef={this.state.modalIdRef}/>;
        } else {
            return <p>This is a {this.state.category} item with an id of {this.state.itemId}</p>;
        }
    }
}

export default ListItem;


