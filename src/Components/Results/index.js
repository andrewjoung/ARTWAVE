import React from 'react'
import "./style.css";

const styles = {
  color:"white"
}

export default function Results(props) {

  return (
    <div className="searchItemDiv">
      <img className="resultImage" onClick={()=>props.click(props.id)} id={props.id} src={props.image}></img>
      <p className="searchItemTitle" style={styles}>{props.title}</p>
    </div>
  )
}
