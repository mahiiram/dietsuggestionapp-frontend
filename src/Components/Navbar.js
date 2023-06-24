import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './styles/Navbar.styles.css';
import {FaBars, FaTimes} from 'react-icons/fa';

function Navbar() {
   const [click,setClick] = useState(false)
   const handleClick = () =>{
    setClick(!click)
   }
  return (
    <div className='header'>
        <Link to='/'>
            <h1 style={{color:'black'}}>DietApp</h1>
        </Link>
        <ul className={click? "navmenu active" : "navmenu"}>
            <li>
                <Link to='/' style={{color:'black'}}>Home</Link>
            </li>
            <li>
                <Link to='/programs' style={{color:'black'}}>programs</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color:'black',}} />)
             :
            (<FaBars size={20} style={{color:'black',}} />)}
        </div>
    </div>
  )
}

export default Navbar