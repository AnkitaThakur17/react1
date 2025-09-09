import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Car from './components/Car.jsx'
import Vehicle from './components/Vehicle.jsx'
import New1 from './components/New1.jsx'
import Form from './components/Form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <Car color = "red" brand = "ford" model= "mustang"/>
    <Vehicle/>
    <New1/>
    <Form/>
  </StrictMode>,
)
