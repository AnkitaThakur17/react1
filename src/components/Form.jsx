import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    mytext: "",
    myCar: "Volvo",
  });
  // const [mytext,setmyText] =useState('')
  // const [myCar, setmyCar] = useState('Volvo')

  //generic change handler
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(formData.name);
  }

  // function handletheChange(e){
  //     setmyText(e.target.value)
  // }

  // function handleChange (e){
  //     setName(e.target.value)
  // }

  // function handleCarChange (e){
  //     setmyCar(e.target.value)
  // }

  // function handleSubmit(e){
  //     e.preventDefault()
  //     alert(name)
  // }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name :
        <input type="text" value={formData.name} onChange={handleChange} />
      </label>

      <p>Current value: {formData.name}</p>
      <input type="submit" />
      <textarea value={formData.mytext} onChange={handleChange} />

      <select value={formData.myCar} onChange={handleChange}>
        <option value="ford">Ford</option>
        <option value="BMW">BMW</option>
        <option value="Volvo">Volvo</option>
      </select>
    </form>
  );
};

export default Form;
