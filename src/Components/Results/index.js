import React from 'react'

export default function Results(props) {
  return (
    <div>
      <img onClick={()=>props.click(props.id)} id={props.id} src={props.image}></img>
    </div>
  )
}
