import React from 'react'

const Car = (props) => {
  return (
    <div>
      <h2>Hi, I'm a {props.color} {props.model} {props.brand} Car made in {props.year}</h2>
    </div>
  )
}

export default Car
