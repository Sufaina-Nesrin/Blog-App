import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Sidebar() {
  const [cat, setCat] = useState([])

  useEffect(()=>{
    const getCat = async ()=>{
      const res = await axios.get("/categories")
      setCat(res.data)
    }
    getCat();
  },[])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="../../assets/profile3.jpg" alt="" className="sidebarImg" />
        <p className="sidebarText">
          Lorem ipsum diolr textsit amet constuctor amplpsing elit. volutpaet
          qui eudi swapea natus , libre figma rependicular quof incidenf quency
          hi magni moliyical
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <div className="sidebarItems">
          {cat.map((c)=>(
            <Link to={`/?category=${c.name}`} className="link"> <li className="sidebarListItem">{c.name}</li></Link>
           
          ))}
            
            
        </div>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarItemContainer">
          <i className="topIcon fa-brands fa-facebook-f"></i>
          <i className="topIcon fa-brands fa-twitter"></i>
          <i className="topIcon fa-brands fa-instagram"></i>
          <i className="topIcon fa-brands fa-pinterest-p"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
