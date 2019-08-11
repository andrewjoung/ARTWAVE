import React, { Component } from 'react';
import "./style.css";
import ListCard from '../ListCard';
import { Link } from "react-router-dom";
import api from '../../API/api';
import { tsPropertySignature } from '@babel/types';

function MainBody(props) {

    let category = "";

    if(props.page === "cinema") {
        category = "cinema";
        // console.log("filter " + category);
    } else if (props.page === "literature") {
        category = "literature";
        // console.log("filter " + category);
    }else {
        category = "music";
        // console.log("filter " + category);
    }

    let listSearchObject = {
        category: props.page,
        username: props.loginInfo.username
    }

    let card;

    // console.log("function shit", category);
    // console.log(props);
    return(
        <div id="mainBody">
            {/* returning main body and category is {props.page} */}
            <h4 className="pinnedText">Your Pinned Lists</h4>
            <div className="row">
                {props.cards}
                <div className="listActions">
                    <Link to="/list" className="action">See All</Link>
                    <Link to={{ pathname: "/create-list", state: {loginInfo: props.loginInfo, category: props.page}}} className="action">Create List</Link>
                    {/* <Link to="/create-list" loginInfo = {props.loginInfo} className="action">Create List</Link> */}
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default MainBody;