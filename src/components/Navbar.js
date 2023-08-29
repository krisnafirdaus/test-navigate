import React from "react"
import {Outlet, Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/detail">Detail</Link>
            </li>
          </ul>
        </nav>
  
        <hr />
  
        <Outlet />

        <footer>
          <h1>Footer</h1>
        </footer>
      </div>
    )
}

export default Navbar;