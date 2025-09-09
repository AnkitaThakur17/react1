import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const hp = 218 * 1.36;
  const myobj = {
    name : "dog",
    sound : "barks",
    color : "black"
  }
  const myStyles ={
  color : "blue",
  fontSize : "20px",
  backgroundColor : "white"
  }
  return (
    <>
      <div>
        <h1 style={myStyles}>Hello World</h1>
        <h1>React is {5+5} times better with JSX</h1>
        <p>It has {hp} items</p> 
        <h3>My animal is {myobj.name} He {myobj.sound} and his color is {myobj.color}</h3>
      </div>
    </>
  )
}

export default App
