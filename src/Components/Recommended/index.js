import React, {Component} from 'react';
import {Link} from "react-router-dom";
import API from "../../API/api.js";
import "./style.css";
import ListCard from '../ListCard/index.js';

class Recommended extends Component {
    state = {
        id: JSON.parse(localStorage.getItem("loginInfo")).id,
        recommendedData: []
    }

    //
    componentDidMount = () => {
        // console.log("Component mounting with userId: " + this.state.id + "\n");
        API.populateRecommended(this.state.id).then(dbRes => {
            // console.log("Rec response:\n", dbRes);
            this.setState({
                recommendedData: dbRes.data.recommended
            });
        }).catch(err => {
            console.log(err);
        });
    }

    render = () => {
        return (
            <div id="recBody">
                <h4 className="recHeader">Recommended By Your Friends</h4>
                <div className="row">

                    {this.state.recommendedData.filter(recObj => recObj.category === this.props.page).map(filteredObj => {
                        // const id = 
                        const category = filteredObj.category;
                        const listId = filteredObj._id;
                        // const listItem = filteredObj;
                        const id = "listCard" + (Math.floor(Math.random() * 12) + 1);
                        return <ListCard id={id} onClick={this.props.cardClick} category={category} listId={listId} listItem={filteredObj}/>
                    })}

                    <div className="listActions">
                        <Link to="/recommended" className="action">See All</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Recommended;
