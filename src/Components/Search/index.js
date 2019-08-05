
var Spotify = require('node-spotify-api');
var spotify = new Spotify({
  id: 'b5d5612d07684ecdacbfd220fb70b4c9',
  secret: '7c527687d94c49f1a283872df71f004e'
});

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
    bigO.image= image;
    bigO.artist = data.tracks.items[i].album.artists[0].name
    bigO.id= i
    array4.push(bigO)
    

  }
  console.log(array4)

});

// import React, { Component } from "react";
// import Results from '../Results'
// import { thisTypeAnnotation } from "@babel/types";





// let axios = require('axios');
// let apiKey = '91413d43'


// class Form extends Component {
//   // Setting the component's initial state
//   state = {
//     title: "",
//     media: "",
//     array: []
//   };


//   click = (id) => {
//     console.log(id)
//     let array3 = []
//     for (var i = 0; i < this.state.array.length; i++) {
//       array3.push(this.state.array[i])
//     }
//     console.log(array3.indexOf(id))
//     array3.filter(object => {
//       if (object.id === id)
//         array3.splice(array3.indexOf(object), 1)
//     })
//     this.setState({ array: array3 })
//   }



//   handleInputChange = event => {
//     // Getting the value and name of the input which triggered the change
//     const { name, value } = event.target;

//     // console.log(event.target)

//     // Updating the input's state
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = e => {
//     e.preventDefault()




//     if (this.state.media === 'movies') {




//       let omdb = `http://www.omdbapi.com/?s=${this.state.title}&y=&plot=short&apikey=${apiKey}`
//       let array2 = []
//       if (this.state.media === 'movies') {
//         axios.get(omdb).then(res => {

//           for (var i = 0; i < res.data.Search.length; i++) {
//             if (res.data.Search[i].Poster !== 'N/A') {

//               let emptyO = { name: '', image: '', id: i }
//               emptyO.name = res.data.Search[i].Title;
//               emptyO.image = res.data.Search[i].Poster;

//               array2.push(emptyO)

//             }
//           }


//           this.setState({ array: array2 })



//         }).catch(err => {
//           console.log(err)
//         })
//       }
//     }
//     else if (this.state.media === 'books') {
//       axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.title}`).then(response => {
//         let array2 = []

//         this.setState({ array: response.data.items })
//         console.log(response.data.items[5].volumeInfo)

//         for (var i = 0; i < response.data.items.length; i++) {
//           if (response.data.items[i].volumeInfo.imageLinks) {

//             let emptyO = { name: '', image: '', id: i }
//             emptyO.name = response.data.items[i].volumeInfo.title
//             emptyO.image = response.data.items[i].volumeInfo.imageLinks.thumbnail

//             array2.push(emptyO)
//             console.log(array2)
//           }
//         }

//         this.setState({ array: array2 })
//         console.log(array2)
//       })
//     }

//     else if (this.state.media === 'music') {


//     };




//   };

//   render() {
//     // Notice how each input has a `value`, `name`, and `onChange` prop
//     return (
//       <div>
//         <p>
//           Enter the Media you wish to search {this.state.firstName} {this.state.lastName}
//         </p>
//         <form className="form">
//           <div id="second-input-hidden" className="col-md-12 mt-4">
//             <select name="media" value={this.state.media} onChange={this.handleInputChange} id="make-select" className="browser-default custom-select">
//               <option >Select the type of media you want to search</option>
//               <option value="movies" >Movies</option>
//               <option value="music">Music</option>
//               <option value="books">Books</option>


//             </select>
//           </div>
//           <input
//             value={this.state.title}
//             name="title"
//             onChange={this.handleInputChange}
//             type="text"
//             placeholder="First Name"
//           />

//           <button onClick={this.handleFormSubmit}>Submit</button>
//         </form>
//         {this.state.array.map(media => (
//           <Results click={this.click} key={media.id} image={media.image} id={media.id} />
//         ))}

//       </div>
//     );
//   }
// }

// export default Form;

