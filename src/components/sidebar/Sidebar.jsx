import React from "react";
import "./Sidebar.css";

function Sidebar() {
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
          <div className="firstItems">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
          </div>
          <div className="secondItems">
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
          </div>
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
