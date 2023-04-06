import React from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-f"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-pinterest-p"></i>
      </div>
      <div className="topCenter">
      <Link to='/'><li className="topListItem">HOME</li></Link>
       <Link to='/'><li className="topListItem">ABOUT</li></Link>
       <Link to='/'><li className="topListItem">CONTACT</li></Link>
       <Link to='/write'><li className="topListItem">WRITE</li></Link>
       {user? <Link to='/login'><li className="topListItem">LOGOUT</li></Link>:<Link to='/login'><li className="topListItem">LOGIN</li></Link>} 
      </div>
      <div className="topRight">
        <div className="left"></div>
        <div className="right">
          <i className="searchIcon fa-solid fa-magnifying-glass"></i>
          <img
            src="https://img.freepik.com/free-photo/dreamy-young-woman-sunglasses-looking-front_197531-16739.jpg"
            alt=""
            className="profileImage"
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
