import React from "react";
import "./sidebar.css";
import { categories } from "../Utils/constants";
import { Link } from "react-router-dom";
const Sidebar = ( {setSelectedCategory}) => {
    console.log("side bar")
  return (
   
    <div className="sidebar" >
      {
      categories.map((item,idx) => (
        <Link className="link" onClick={()=>{setSelectedCategory(item.name)}} >
        <div key={idx} className="sidebar-items" >
          <div>{item.icon}</div>
          <div className="sidebar-itemtitle">{item.name}</div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
