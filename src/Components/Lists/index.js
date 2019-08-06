import React from 'react';

import axios from 'axios';
import LDisplay from '../LDisplay'
let apiKey = '91413d43';




class Lists extends React.Component {

  state = {
    array: [],
    count: 0
  }
  componentDidMount() {
    let array = [{
      name: "The Avengers",
      image: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      id:0
    }, {
      name: "Avengers: Infinity War",
      image: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
      id:1
    },
    {
      name: "Avengers: Age of Ultron",
      image: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
      id:2
    },
    ]
    let array2 = [
      {
        name: 'The Matrix',
        image: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        id:0

      },
      {
        name: "The Matrix Reloaded",
        image: "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        id:1
      },
      {

        name: "The Matrix Revolutions",
        image: "https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        id:2
      }
    ]
    let mainArray = [array, array2]
    console.log(mainArray)
    this.setState({ array: mainArray })
    

  }
  render() {
    
    return (
      

      <div>
        {this.state.array.map(array=>(
          <LDisplay  image={array[0].image} title={array[0].name} id={array[0].id} />
        ))}
      </div>
    )
  }
}


export default Lists;
