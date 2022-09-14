import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./Components/NavBar";

function App() {
  return (
    
  <Router>
    <NavBar/>
   <Routes>
    <Route path="/"  element ={<Home/>}/>
   </Routes>
  </Router>
  )
}

export default App;
