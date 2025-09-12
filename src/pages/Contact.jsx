import { useContext } from "react"
import { UserContext } from "../Context"


const Contact = () => {

const user = useContext(UserContext)
  return (
<>
    <h1>Contact Us Page</h1>
    <h1>Hello from : {user.city}</h1>
    <p>My contact is : {user.contact}</p>
</>
  )
}

export default Contact
