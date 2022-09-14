import React from "react";
import "./sidebar.css";
import { categories } from "../Utils/constants";
const Sidebar = ( {setSelectedCategory}) => {
    console.log("side bar")
  return (
   
    <div className="sidebar" >
      {
      categories.map((item,idx) => (
        <div key={idx} className="sidebar-items" onClick={()=>{setSelectedCategory(item.name)}}>
          <div>{item.icon}</div>
          <div className="sidebar-itemtitle">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
