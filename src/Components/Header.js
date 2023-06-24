import React from 'react';
import '../Components/styles/Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <Link to='/'>
            <h1>DietApp</h1>
        </Link>
        <ul className='header-menu'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/programs'>Programs</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header