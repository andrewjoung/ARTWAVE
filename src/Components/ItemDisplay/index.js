import React from 'react'

const style = {
  color: 'white'
}

export default function ItemDisplay(props) {
  return (
    <div>
      <h1 style={style}>{props.name}</h1>
      <img src={props.image}></img>
    </div>
  )
}
