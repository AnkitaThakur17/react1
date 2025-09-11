import React from 'react'
import Car from './Car'

const Vehicle = () => {
    const shoot = ()=>{
        alert("Great shot")
    }
  return (
    <div>
      <h1>who lives in my Garage </h1>
      <Car year = {1996}/>
      <button onClick={shoot}>Press here</button>
    </div>
  )
}

export default Vehicle
