import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import { UserContext } from '../Context';

const About = () => {
   const [count,setCount] =useState(0)
    const [calculation, setcalculation] =useState(0)
    useEffect(()=>{
    setcalculation(()=>count*2)
  },[count])
  const user = useContext(UserContext)
  return (
    <div>
      <h1>Hello, {user.name}</h1>
      <h1>This is About Us page</h1>
      <p>Count : {count}</p>
      <button onClick={()=>setCount((c)=>c+1)}>+</button>
      <p>Calculation: {calculation}</p>

    </div>
  )
}

export default About
