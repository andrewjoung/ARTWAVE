import React from 'react'
import "./style.css";
import {Link} from "react-router-dom";


export default function ProfileInfo(props) {
    return (
        <div>
            <img alt="user avatar"></img>
            <Link to="/friends" friends={props.friends}>
                <button className="btn btn-primary">See Friends</button>
            </Link>
        </div>
    )
}
