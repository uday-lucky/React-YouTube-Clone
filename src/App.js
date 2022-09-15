import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/home";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import NavBar from "./Components/NavBar";
import SearchData from "./Components/searchdata";


function App() {
 
  return (
  <Router>
    <NavBar/>
   <Routes>
    <Route path="/"  element ={<Home/>}/>
    <Route path="/search/:searchTerm" exact element ={<SearchData/>}/>
   </Routes>
  </Router>
  )
}

export default App;
