import React from 'react'

export default function LDisplay(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.image} id={props.id}></img>
    </div>
  )
}
