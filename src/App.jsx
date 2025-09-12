import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Car from "./components/Car.jsx";
import Vehicle from "./components/Vehicle.jsx";
import New1 from "./components/New1.jsx";
import Form from "./components/Form.jsx";
import Radio from "./components/Radio.jsx";
import CarDetail from "./components/CarDetail.jsx";
import Count from "./components/Count.jsx";
import { UserContext } from "./Context.jsx";

function App() {
   const user = { name: "Ankita", city: "Indore", contact: 4567 };
  return (
     <UserContext.Provider value={user}>
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About Us</Link>
        <Link to="/Contact">Contact Us</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Car color="red" brand="ford" model="mustang" />
              <Vehicle />
              <New1 />
              <Form />
              <Radio />
              <Count/>
            </>
          }
        />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />

          
  {/* Dynamic car detail route */}
  <Route path="/car/:id" element={<CarDetail/>} />
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
