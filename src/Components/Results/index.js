import React from 'react'

const styles = {
  color:"white"
}
export default function Results(props) {
  return (
    <div>
      <h1 style={styles}>{props.name}</h1>
      <img onClick={()=>props.click(props.id)} id={props.id} src={props.image}></img>
    </div>
  )
}
