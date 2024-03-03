import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css';


export default function Navbar() {
  return (
    <div className='nav'>
      <div className="nav-bar">
        <ul>
          <li>
            <Link className="nav-link" to="/dealer">About</Link>
          </li>
          <li>
            <Link className="nav-link" to="/dealer/add">Add Car</Link>
          </li>
          <li>
          <Link className="nav-link" to="/dealer/sold">Sold Car</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
