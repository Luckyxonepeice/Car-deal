import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <ul>
          <l1>
            <Link to="/dealer-about">About</Link>
            <Link to="/add-car">Add Car</Link>
          </l1>
        </ul>
      </div>
    </div>
  );
}
