import React, { useState } from 'react'

const Form = () => {
    const [name,setName] = useState("")
    function hadleChange (e){
        setName(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        alert(name)
    }
  return (
  <form onSubmit={handleSubmit}>
   <label>Enter your name :
    <input type='text' value={name} onChange={hadleChange}/>
   </label>
   <p>Current value: {name}</p>
   <input type='submit'/>
  </form>
  )
}

export default Form
