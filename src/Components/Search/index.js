import React, { Component } from "react";
import Results from '../Results'
import { thisTypeAnnotation } from "@babel/types";
import Music from "../SearchM"

import axios from 'axios'
var Spotify = require('node-spotify-api');
var spotify = new Spotify({
  id: 'b5d5612d07684ecdacbfd220fb70b4c9',
  secret: '7c527687d94c49f1a283872df71f004e'
});









//let axios = require('axios');
let apiKey = '91413d43'


class Form extends Component {
  // Setting the component's initial state
  state = {
    title: "",
    media: "",
    array: []
  };

  //Onclick funtion that is attatched to each image, used to splice from array so no longer displayed and used to pass clicked data into database to persist to lists
  click = (id) => {
    console.log(id)
    let array3 = []
    for (var i = 0; i < this.state.array.length; i++) {
      array3.push(this.state.array[i])
    }
    console.log(array3.indexOf(id))
    array3.filter(object => {
      if (object.id === id)
        array3.splice(array3.indexOf(object), 1)
    })
    this.setState({ array: array3 })
  }

  //event handler to change state to whatever has been typed into input box

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // console.log(event.target)

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  //main api call function, runs 90% of what is seen on page

  handleFormSubmit = e => {
    e.preventDefault()
    //apio call to movies using input change states
    if (this.state.media === 'movies') {


      let omdb = `http://www.omdbapi.com/?s=${this.state.title}&y=&plot=short&apikey=${apiKey}`
      let array2 = []
      if (this.state.media === 'movies') {
        axios.get(omdb).then(res => {

          for (var i = 0; i < res.data.Search.length; i++) {
            if (res.data.Search[i].Poster !== 'N/A') {

              let emptyO = { name: '', image: '', id: i }
              emptyO.name = res.data.Search[i].Title;
              emptyO.image = res.data.Search[i].Poster;

              array2.push(emptyO)

            }
          }


          this.setState({ array: array2 })



        }).catch(err => {
          console.log(err)
        })
      }
    }

    //api call to google books via input selection.
    else if (this.state.media === 'books') {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.title}`).then(response => {
        let array2 = []

        this.setState({ array: response.data.items })
        console.log(response.data.items[5].volumeInfo)

        for (var i = 0; i < response.data.items.length; i++) {
          if (response.data.items[i].volumeInfo.imageLinks) {

            let emptyO = { name: '', image: '', id: i }
            emptyO.name = response.data.items[i].volumeInfo.title
            emptyO.image = response.data.items[i].volumeInfo.imageLinks.thumbnail

            array2.push(emptyO)
            console.log(array2)
          }
        }

        this.setState({ array: array2 })
        console.log(array2)
      })
    }
    //api call to spotify, needs to be launched server side to work
    else if (this.state.media === 'music') {

      //search for spotify songs based on input
      spotify.search({ type: 'track', query: 'Hips dont lie' }, function (err, data) {
        let array4 = []
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        // console.log(data.tracks.items[0].album.name)
        for (var i = 0; i < data.tracks.items.length; i++) {
          let bigO = {};
          let image = (data.tracks.items[i].album.images[0].url);
          let name = data.tracks.items[i].name;
          bigO.name = name;
          bigO.image = image;
          bigO.artist = data.tracks.items[i].album.artists[0].name
          bigO.id = i
          array4.push(bigO)


        }
        console.log(array4)

      });

      //search for spotify albums via input
      spotify.search({ type: 'album', query: 'darkside of the moon' }, function (err, data) {
        let array4 = []
        if (err) {
          return console.log('Error occurred: ' + err);
        }


        for (var i = 0; i < data.albums.items.length; i++) {
          let bigO = {};
          let name = data.albums.items[i].name
          let artist = (data.albums.items[i].artists[0].name);
          let image = (data.albums.items[i].images[0].url);

          bigO.artist = artist;
          bigO.image = image;
          bigO.name = name
          array4.push(bigO)

        }
        console.log(array4)
        // console.log(data.albums.items[0])




      });
    };

  };

  render() {
    //different page rendering based on music selection (displays second dropdown for album or track)
    if (this.state.media === 'music') {

      return (
        <div>
          <p>
            Enter the Media you wish to search {this.state.firstName} {this.state.lastName}
          </p>
          <form className="form">
            <div id="second-input-hidden" className="col-md-12 mt-4">
              <select name="media" value={this.state.media} onChange={this.handleInputChange} id="make-select" className="browser-default custom-select">
                <option >Select the type of media you want to search</option>
                <option value="movies" >Movies</option>
                <option value="music">Music</option>
                <option value="books">Books</option>


              </select>
              <Music />

            </div>
            <input
              value={this.state.title}
              name="title"
              onChange={this.handleInputChange}
              type="text"
              placeholder="First Name"
            />

            <button onClick={this.handleFormSubmit}>Submit</button>
          </form>
          {this.state.array.map(media => (
            <Results click={this.click} key={media.id} image={media.image} id={media.id} />
          ))}

        </div>
      );
    }
    else {
      return (
        <div>
          <p>
            Enter the Media you wish to search {this.state.firstName} {this.state.lastName}
          </p>
          <form className="form">
            <div id="second-input-hidden" className="col-md-12 mt-4">
              <select name="media" value={this.state.media} onChange={this.handleInputChange} id="make-select" className="browser-default custom-select">
                <option >Select the type of media you want to search</option>
                <option value="movies" >Movies</option>
                <option value="music">Music</option>
                <option value="books">Books</option>


              </select>

            </div>
            <input
              value={this.state.title}
              name="title"
              onChange={this.handleInputChange}
              type="text"
              placeholder="First Name"
            />

            <button onClick={this.handleFormSubmit}>Submit</button>
          </form>
          {this.state.array.map(media => (
            <Results click={this.click} key={media.id} image={media.image} id={media.id} />
          ))}

        </div>
      )
    }
  }

}

export default Form;

