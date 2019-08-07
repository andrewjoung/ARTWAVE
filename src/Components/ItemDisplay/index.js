import React from 'react'

const style = {
  color: 'white'
}

export default function ItemDisplay(props) {
  return (
    <div>
      <h1 style={style}>{props.name}</h1>
      <img onClick = {()=>props.modal(props.id)} src={props.image}></img>
    </div>
  )
}
