import React, { Component } from "react";
import Results from '../Results'

let axios = require('axios');
let apiKey = '91413d43'





class Form extends Component {
  // Setting the component's initial state
  state = {
    title: "",
    media: "",
    array: []
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // console.log(event.target)

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault()

    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.title}`).then(response => {
      console.log(response.data.items)
    })



    if (this.state.media === 'movies') {


      let omdb = `http://www.omdbapi.com/?s=${this.state.title}&y=&plot=short&apikey=${apiKey}`
      let array2 = []
      if (this.state.media === 'movies') {
        axios.get(omdb).then(res => {
          this.setState({ array: res.data.Search })
          for (var i = 0; i < this.state.array.length; i++) {
            // console.log(this.state.array[i])
            if (this.state.array[i].Poster !== "N/A") {

              array2.push(this.state.array[i])
            }
          }
          this.setState({ array: array2 })

        }).catch(err => {
          console.log(err)
        })
      }
    }



  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Enter the Media you wish to search {this.state.firstName} {this.state.lastName}
        </p>
        <form classNameName="form">
          <div id="second-input-hidden" className="col-md-12 mt-4">
            <select name="media" value={this.state.media} onChange={this.handleInputChange} id="make-select" className="browser-default custom-select">
              <option selected>Select the type of media you want to search</option>
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
          <Results image={media.Poster} />
        ))}

      </div>
    );
  }
}

export default Form;

