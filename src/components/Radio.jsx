import { useState } from "react"

const Radio = () => {
    const [selectedFruit, setSelectedFruit] = useState('Banana')
    const handleChange = (e)=>{
        setSelectedFruit(e.target.value)
    }
    const handleSubmit =(e)=>{
        alert(`Your Favourite Fruit is : ${selectedFruit}`)
        e.preventDefault()
    }
  return (
 <form onSubmit={handleSubmit}>
 <p>Select your favourite fruit</p>
 <label>
    <input type='radio'
    name='fruit'
    value='Apple'
    checked = {selectedFruit === 'Apple'}
    onChange={handleChange}/> Apple
 </label>
 <br/>
 <label>
    <input type='radio'
    name='fruit'
    value='Mango'
    checked = {selectedFruit === 'Mango'}
    onChange={handleChange}/> Mango
 </label>
 <br/>
 <label>
    <input type='radio'
    name='fruit'
    value='Banana'
    checked={selectedFruit === 'Banana'}
    onChange={handleChange}/> Banana
 </label>
 <br/>
 <button type='submit'>Submit</button>
  </form>
  )
}

export default Radio
