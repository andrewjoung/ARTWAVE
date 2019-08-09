import React, {Component} from 'react';
import './style.css';

export default function ImageCard(props) {
    return (
        <div className="col imageOption" onClick={() => props.onClick(props.id)} id={props.id} style={{background:"url(" + props.name + ") center/cover"}}> </div>
    );
}