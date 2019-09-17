import React from 'react'
import "./style.css";

const styles = {
  color:"white"
}

export default function Results(props) {

  if(props.className === "musicMediaItem") {
    return (
      <div className="searchItemDiv">
        {/* TODO: Add to the alt attribute specific information about which artwork it is */}
        <img className="musicResultImage" alt="Music artwork" onClick={()=>props.click(props.id)} id={props.id} src={props.image}></img>
        <p className="searchItemTitle" style={styles}>{props.title}</p>
      </div>
    )
  } else {
    return (
      <div className="searchItemDiv">
        <img className="resultImage" alt="Result artwork" onClick={()=>props.click(props.id)} id={props.id} src={props.image}></img>
        <p className="searchItemTitle" style={styles}>{props.title}</p>
      </div>
    )
  }

}
