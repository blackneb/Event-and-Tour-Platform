import React,{useState} from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import menu from './menu.png';
import close from "./close.png";

const Navbar = () => {

  const[isMobile,setIsMobile]=useState(false);
  return (
      <nav className='navbar'>
          <h3 className='logo'>Logo</h3>
          <ul className={isMobile? "nav-links-mobile" : "nav-li"} onClick={()=>setIsMobile(false)}>
            
                <Link  to="/" className='links'>
                  <li>Home</li>
                </Link>
                <Link  to="/events" className='links'>
                  <li>Events</li>
                </Link>
                <Link  to="/tour" className='links'>
                  <li>Tour</li>
                </Link>
                <Link  to="/trending" className='links'>
                  <li>Trending</li>
                </Link>
                <Link  to="/howto" className='links'>
                  <li>How to</li>
                </Link>
                <Link  to="/contact" className='links'>
                  <li>Contact</li>
                </Link>
                <Link  to="/signup" className='links-signup'>
                  <li>Sign up</li>
                </Link>
                <Link  to="/admins" className='links-signup'>
                  <li>Admin</li>
                </Link>

          </ul>
          <button className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}>
            {isMobile? <img src={close} alt="" className='close-style'/> : <img src={menu} alt="" className='menu-style'/> }
          </button>
      </nav> 
  )
}

export default Navbar
