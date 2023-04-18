import React, { useContext } from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
function Topbar() {
  const {user, dispatch} = useContext(Context);
  const PF ="http://localhost:5000/images/"

  const handleLogout = ()=>{
  dispatch({type:"LOGOUT"})
  }
  

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
       <Link to='/login'> {user? <li onClick={handleLogout} className="topListItem">LOGOUT</li>:<li className="topListItem">LOGIN</li> }</Link>
      </div>
      <div className="topRight">
        <div className="left">
          
        </div>
        <div className="right">
       <Link to="/signup"><span className="topbarSignup">SIGN UP</span></Link> 
        
          <i className="searchIcon fa-solid fa-magnifying-glass"></i>
          {console.log(user)}
         <Link to="/settings">
         {user && (
           <>
           {user.profilePic ? (
             <img src={PF+user.profilePic} className="profileImage" alt="Profile" />
           ) : (
             <img src="../../../assets/icon2.png" className="profileImage"/>
           )}
         </>
          
        )}
          
         </Link>
       
        </div>
      </div>
    </div>
  );
}

export default Topbar;
