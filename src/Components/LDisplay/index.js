import React from 'react'

export default function LDisplay(props) {
  // console.log(props.array)
  return (
    <div>
      <h1 style={props.style}>{props.title}</h1>
      <img onClick = {()=>props.click(props.array)} src={props.image} id={props.id}></img>
    </div>
  )
}
