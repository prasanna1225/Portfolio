import React, { useState } from 'react'
import './navbar.css';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
const Navbar = () => {
  const[toggleMenu, setToggleMenu]=useState(false);
  return (
    <nav className='navbar'>
      <a className='brand' href='/'>DP</a>
    <div className='menu'>
    <ul className='menuItems'>
      <li><a href='#about'>About Me</a></li>
      <li><a href='#experience'>Experience</a></li>
      <li><a href='#projects'>Projects</a></li>
    
      <li><a target="_blank" href='https://prasanna16.hashnode.dev/'>Blogs</a></li>
 </ul>

    </div>
    <div className='responsive-menu'>
   {toggleMenu
   ?<RiCloseLine color='#fff' size={27} onClick={()=>setToggleMenu(false)}/>
   :<RiMenu3Line color='#fff' size={27} onClick={()=>setToggleMenu(true)}/>}
   {toggleMenu &&(
    <div className='responsive-menu-container'>
    <ul className='responsive-menu-links'>
      <li><a href='#about'>About Me</a></li>
      <li><a href='#experience'>Experience</a></li>
      <li><a href='#projects'>Projects</a></li>
      <li><a target="_blank" href='https://prasanna16.hashnode.dev/'>Blogs</a></li>
 </ul>
    </div>
   )}
    </div>
    </nav>
  )
}

export default Navbar
