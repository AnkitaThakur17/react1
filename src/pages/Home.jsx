import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>This is Home page</h1>
      <Link to="/car/123">View Car 123 Details</Link>
    </div>
  )
}

export default Home