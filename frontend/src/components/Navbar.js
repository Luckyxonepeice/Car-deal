import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css';

export default function Navbar() {
  return (
    <div className='nav'>
      <div className="nav-bar">
        <ul>
          <li>
            <Link className="nav-link" to="/dealer-about">About</Link>
          </li>
          <li>
            <Link className="nav-link" to="/add-car">Add Car</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
