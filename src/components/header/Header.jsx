import React from 'react';
import './Header.css'
import Topbar from '../topBar/Topbar';
import Home from '../../pages/home/Home';
function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitlesm">Read & Write</span>
                <span className="headerTitlelg">BLOG</span>
            </div> 
            <img src="../../assets/picture2.jpg" alt="" className="headingImg" />   
        </div>
    );
}

export default Header;