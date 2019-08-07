import React from 'react';

import axios from 'axios';
import LDisplay from '../LDisplay'
import ItemDisplay from '../ItemDisplay'
let apiKey = '91413d43';


const style = {
  color: 'white'
}

class Lists extends React.Component {

  state = {
    array: [],
    count: 0,
    smallArray: [],
    chosen: false,
    textVal: ''
  }
  componentDidMount() {
    let array = [{ name: "scotts lists" },
    {
      name: "The Avengers",
      image: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      id: 0,
      omdbId : 'tt0133093'
    }, {
      name: "Avengers: Infinity War",
      image: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
      id: 1,
      omdbId : 'tt0133093'
    },
    {
      name: "Avengers: Age of Ultron",
      image: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
      id: 2,
      omdbId : 'tt0133093'
    },
    ]
    let array2 = [{ name: 'devins List' },
    {
      name: 'The Matrix',
      image: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
      id: 0,
      omdbId : 'tt0133093'

    },
    {
      name: "The Matrix Reloaded",
      image: "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
      id: 1,
      omdbId : 'tt0133093'
    },
    {

      name: "The Matrix Revolutions",
      image: "https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      id: 2,
      omdbId : 'tt0133093'
    }
    ]
    let mainArray = [array, array2]
    this.setState({ array: mainArray })


  }

  handleChange = (event) => {
    const { name, value } = event.target;

    // console.log(event.target)

    // Updating the input's state
    this.setState({
      [name]: value
    });
  }

  hanldeSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:8080/comments',{comment:this.state.textVal}).then(data=>{

    })
  }

  modal = (e,id) =>{
    e.preventDefault()
    console.log('this is working', id)
  }


  click = (x) => {
    this.setState({ smallArray: x, chosen: true })
  }
  render() {
    // console.log(this.state.smallArray)

    if (this.state.chosen === false) {

      return (


        <div>
          {this.state.array.map(array => (
            <LDisplay click={this.click} style={style} array={array} image={array[1].image} title={array[0].name} id={array[1].id} />
          ))}
        </div>
      )
    }
    else {
      return (
        <div>
          <form>
            {this.state.smallArray.map(item => (
              <ItemDisplay id={item.omdbId} click = {this.modal} image={item.image} name={item.name} />
            ))}
            <textarea name='textVal' value={this.state.textVal} onChange={this.handleChange}></textarea>
            <button onClick = {this.hanldeSubmit} className ="btn btn-success">Submit Comment</button>
          </form>
        </div>
      )
    }
  }
}


export default Lists;
