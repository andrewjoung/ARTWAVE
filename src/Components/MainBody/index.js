import React, { Component } from 'react';
import "./style.css";
import ListCard from '../ListCard';
import { Link } from "react-router-dom";
import api from '../../API/api';
import { tsPropertySignature } from '@babel/types';

const TESTING_LIST1 = {
    title: "Oscar Movies",
    items: [{
        title: "Whiplash",
        genre: "Drama",
        actors: "Miles Teller, J.K. Simmons, Paul Reiser, Melissa Benoist",
        director: "Damien Chazelle",
        poster: "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        plot: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
        website: "http://sonyclassics.com/whiplash/"
    },
    {
        title: "Forrest Gump",
        genre: "Drama",
        actors: "Tom Hanks, Rebecca Williams, Sally Field, Michael Conner Humphreys",
        director: "Robert Zemeckis",
        poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        plot: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.",
        website: "http://www.paramount.com/movies/forrest-gump/"
    }],
    category:"cinema",
    pinned: true
};

const TESTING_LIST2 = {
    title: "Super Hero Moies",
    items: [{
        title: "Batman",
        genre: "Action, Adventure",
        actors: "Michael Keaton, Jack Nicholson, Kim Basinger, Robert Wuhl",
        director: "Tim Burton",
        poster: "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
        plot: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker.",
        website: ""
    },
    {
        title: "The Avengers",
        genre: "Action, Adventure",
        actors: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
        director: "Joss Whedon",
        poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
        website: "http://marvel.com/avengers_movie"
    }],
    category:"cinema",
    pinned: true
};

const TESTING_LIST3 = {
    title:"Horror Movies",
    items: [{
        title: "The Grudge",
        genre: "Horror, Mystery, Thriller",
        actors: "Sarah Michelle Gellar, Jason Behr, William Mapother, Clea DuVall",
        director: "Takashi Shimizu",
        poster: "https://m.media-amazon.com/images/M/MV5BMjIxODg1Nzc3NF5BMl5BanBnXkFtZTcwMjM0MjEzMw@@._V1_SX300.jpg",
        plot: "An American nurse living and working in Tokyo is exposed to a mysterious supernatural curse, one that locks a person in a powerful rage before claiming their life and spreading to another victim.",
        website: "http://www.sonypictures.com/movies/thegrudge/site/"
    }, 
    {
        title: "The Conjuring",
        genre: "Horror, Mystery, Thriller",
        actors: "Vera Farmiga, Patrick Wilson, Lili Taylor, Ron Livingston",
        director: "James Wan",
        poster: "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_SX300.jpg",
        plot: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
        website: "http://www.theconjuring-movie.com"
    }],
    category:"cinema",
    pinned: true
}

const TESTING_LIST4 = {
    title:"Christmas",
    items: [{
        title: "Love Actually",
        genre: "Comedy, Drama, Romance",
        actors: "Bill Nighy, Gregor Fisher, Rory MacGregor, Colin Firth",
        director: "Richard Curtis",
        poster: "https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_SX300.jpg",
        plot:  "Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.",
        website: "http://www.loveactually.com/"
    }, 
    {
        title: "Harry Potter and the Sorcerer's Stone",
        genre: "Adventure, Family, Fantasy",
        actors: "Richard Harris, Maggie Smith, Robbie Coltrane, Saunders Triplets",
        director: "Chris Columbus",
        poster: "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
        plot: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
        website: "http://movies.warnerbros.com/awards/harry.html"
    }],
    category:"cinema",
    pinned: true
}

// class MainBody extends Component {

//     state = {
//         category:"",
//         listRetrieved:[]
//     }

//     // constructor(props) {
//     //     super(props);
//     //     this.componentDidMount = this.componentDidMount.bind(this);
//     // }

//     componentDidMount = () => {
//         //TODO: 
//         //repeat process above for recommended
//         console.log("trying to do shit", this.props);
//         this.setState({category: this.props.page});

//         //console.log("doing stuff", this.props.loginInfo);
//         // api.getLists(this.props.loginInfo.username).then(res => {
//         //     console.log(res);
//         // });
//     }

//     render() {
//         console.log("al;sjdflka", this.state);
//         return(
//             <div id="mainBody">
//                 {/* returning main body and category is {props.page} */}
//                 <h3 className="pinnedText">Pinned Lists</h3>
//                 <div className="row">
//                     {/* {card} */}
//                     <div className="listActions">
//                         <Link to="/list" className="action">See All</Link>
//                         <Link to={{ pathname: "/create-list", state: {loginInfo: this.props.loginInfo, category: this.props.page}}} className="action">Create List</Link>
//                         {/* <Link to="/create-list" loginInfo = {props.loginInfo} className="action">Create List</Link> */}
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

function MainBody(props) {

    let category = "";

    if(props.page === "cinema") {
        category = "cinema";
        console.log("filter " + category);
    } else if (props.page === "literature") {
        category = "literature";
        console.log("filter " + category);
    }else {
        category = "music";
        console.log("filter " + category);
    }

    // let listArray = [TESTING_LIST1, TESTING_LIST2, TESTING_LIST3, TESTING_LIST4];
    // let filteredArray = listArray.filter(list => list.category === category);

    // console.log(filteredArray);

    // let pinnedArray = filteredArray.filter(list => list.pinned === true);

    // console.log(pinnedArray);

    // let card = pinnedArray.map(list => {
    //     return <ListCard listItem = {list} />
    // });

    // console.log("al;ksdjfl;aj");
    // console.log(props.loginInfo);
    // console.log("doing stuff", props.loginInfo);

    let listSearchObject = {
        category: props.page,
        username: props.loginInfo.username
    }

    let card;


    // api.getLists(listSearchObject).then(res => {
    //     console.log("skippity do", res.data);

    //     if(res.data !== null) {
    //         let userListArray = res.data.lists;
    //         let filteredArray = userListArray.filter(list => list.category === category);
    //         let listsToShow = filteredArray.filter(list => list.items.length > 0)
    
    //         console.log("inside if", listsToShow);
    
    //         card = listsToShow.map(list => {
    //             console.log(list);
    //             return <ListCard listItem={list} />;
    //         });

    //         console.log(card);

    //     } else {
    //         console.log("data is null");
    //     }

    // });


    console.log("function shit", category);
    console.log(props);
    return(

        <div id="mainBody">
            {/* returning main body and category is {props.page} */}
            <h3 className="pinnedText">Pinned Lists</h3>
            <div className="row">
                {props.cards}
                <div className="listActions">
                    <Link to="/list" className="action">See All</Link>
                    <Link to={{ pathname: "/create-list", state: {loginInfo: props.loginInfo, category: props.page}}} className="action">Create List</Link>
                    {/* <Link to="/create-list" loginInfo = {props.loginInfo} className="action">Create List</Link> */}
                </div>
            </div>
        </div>
    );  

}

export default MainBody;