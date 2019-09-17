import React, { Component } from "react";
import Results from '../Results'
// import { thisTypeAnnotation } from "@babel/types";
// import Music from "../SearchM"
import {Link} from "react-router-dom";

import axios from 'axios'

import "./style.css";

var Spotify = require('node-spotify-api');
var spotify = new Spotify({
  id: 'b5d5612d07684ecdacbfd220fb70b4c9',
  secret: '7c527687d94c49f1a283872df71f004e'
});

class Form extends Component {
  // Setting the component's initial state
  state = {
    title: "",
    media: "",
    array: [],
    musicType: '',
    listToUse: {}
  };

  componentDidMount = () => {
    console.log(this.props.list);
    this.setState({ listToUse: this.props.list, media: this.props.list.category });
  }
  //Onclick funtion that is attatched to each image, used to splice from array so no longer displayed and used to pass clicked data into database to persist to lists
  click = (id) => {
    console.log(id)
    let array3 = []
    for (var i = 0; i < this.state.array.length; i++) {
      array3.push(this.state.array[i])
    }

    array3.filter(object => {
      if (object.id === id) {
        if (this.state.media === "cinema") {
          axios.post(`https://artwave-api.herokuapp.com/movies/${object.searchId}`, this.state.listToUse).then(data => {
            console.log(data.data);

          }).catch(err => {
            console.log(err)
          })
          array3.splice(array3.indexOf(object), 1)
        }
        else if (this.state.media === 'literature') {
          console.log(object)
          axios.post(`https://artwave-api.herokuapp.com/books/${object.Search}`, this.state.listToUse).then(data => {
            console.log("Client side lit", data.data);
          })
          array3.splice(array3.indexOf(object), 1)
        }

        //axios post and return of data call for the specific clicked music, is added to database on backend. Has an if/else statement within since song and album are two seperate API searches, and will require different routes and be pushed to different models.
        else if (this.state.media === "music") {
          if (this.state.musicType === 'song') {
            id = object.search
            axios.post(`https://artwave-api.herokuapp.com/song/${object.search}/${object.name}`, this.state.listToUse).then(data => {
              console.log("Music Data", data);
            }).catch(err => {
              console.log(err)
            })
          }
          //statement for album search, sends id and album name (basically does exact same search again, but this time uses a string comaprison to filter through the 20 list items that are being returned on back end)
          else if (this.state.musicType === 'album') {
            id = object.search;
            axios.post(`https://artwave-api.herokuapp.com/album/${object.search}/${object.name}`, this.state.listToUse).then(data => {
              console.log("Music Data", data);
            }).catch(err => {
              console.log(err)
            })
          }
          array3.splice(array3.indexOf(object), 1)
        }

      }


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
    if (this.state.media === 'cinema') {
      // console.log('hitting here')
      axios.post('https://artwave-api.herokuapp.com/movies', { title: this.state.title }).then(data => {
        this.setState({ array: data.data })
      }).catch(err => {
        console.log(err)
      })




    }

    //api call to google books via input selection.
    else if (this.state.media === 'literature') {
      axios.post('https://artwave-api.herokuapp.com/books', { title: this.state.title }).then(data => {
        this.setState({ array: data.data })
      }).catch(err => {
        console.log(err)
      })
      //this.setState({ array: array2 })
    }
    //api call to spotify, needs to be launched server side to work
    else if (this.state.media === 'music') {

      if (this.state.musicType === 'album') {


        axios.post('https://artwave-api.herokuapp.com/album/', { title: this.state.title }).then(data => {
          console.log(data.data)
          this.setState({ array: data.data })

        }).catch(err => {
          console.log(err)
        })
      }
      else {
        axios.post('https://artwave-api.herokuapp.com/song/', { title: this.state.title }).then(data => {
          this.setState({ array: data.data })
        })
      }


    };

  };

  render() {
    //different page rendering based on music selection (displays second dropdown for album or track)
    if (this.state.media === 'music') {

      return (
        <div className="mediaContainer">
          <p className="enterMedia">
            Enter the Media you wish to search {this.state.firstName} {this.state.lastName}
          </p>
          <form className="form">
            <input
              value={this.state.title}
              name="title"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Search Term"
              className="form-control mb-4"
            />
            <select name="musicType" value={this.state.musicType} onChange={this.handleInputChange} id="make-select" className="custom-select custom-select-sm">
              <option >Select Song or Album</option>
              <option value="song" >Song</option>
              <option value="album">Album</option>
            </select>
            <button onClick={this.handleFormSubmit} className="btn btn-block my-4" id="mediaSearchButton">Search</button>
          </form>

          <div className="searchResultDiv">
            {this.state.array.map(media => (
              <Results className="musicMediaItem" click={this.click} key={media.id} image={media.image} id={media.id} title={media.name} />
            ))}
          </div>

          <hr />
          <Link to="/main">
            <button className="btn btn-md" id="backToMain">Done</button>          
          </Link>
        </div>
      );
    } else {
      console.log("Scotts stuff", this.state);
      return (
        <div className="mediaContainer">
          <p className="enterMedia">
            Enter the Media you wish to search {this.state.firstName} {this.state.lastName}
          </p>
          <form className="form">
            <input
              value={this.state.title}
              name="title"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Search Term"
              className="form-control mb-4"
            />

            <button onClick={this.handleFormSubmit} className="btn btn-block my-4" id="mediaSearchButton">Search</button>
          </form>

          <div className="searchResultDiv">
            {this.state.array.map(media => (
              <Results click={this.click} key={media.id} image={media.image} id={media.id} title={media.name} />
            ))}
          </div>

          <hr />
          <Link to="/main">
            <button className="btn btn-md" id="backToMain">Done</button>          
          </Link>

        </div>
      )
    }
  }
}

export default Form;

