import React from 'react'

const New1 = () => {
    const animals = ['cat','dog','goat','cow']
    const flowers =[{id:1, name:"Lotus"},
    {id:2, name:"Lilly"},
    {id:3, name:"Rose"}
    ]
  return (
    <div>
      <h1>Animals : </h1>
      <ul>
        {animals.map((animal)=><li>This is a {animal}</li>)}
      </ul>
      <h3>Flowers : </h3>
      <ul>
        {flowers.map((flower)=><li key={flower.id}> Names {flower.name}</li>)}
      </ul>
    </div>
  )
}

export default New1
