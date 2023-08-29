import React from "react"
import {Outlet, Link, useLocation} from 'react-router-dom';
import './index.css';

const Navbar = () => {
  const {pathname} = useLocation()

    return (
        <div>
        <nav>
          <ul>
            <li >
              <Link to="/" className={pathname == "/" && "text-red" }>Home</Link>
            </li>
            <li>
              <Link to="/detail" className={pathname == "/detail" && "text-red" }>Detail</Link>
            </li>
          </ul>
        </nav>
  
        <hr />
  
        <Outlet />

       { pathname === "/" && <footer>
          <h1>Footer</h1>
        </footer> }
      </div>
    )
}

export default Navbar;