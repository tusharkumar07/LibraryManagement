import { NavLink } from 'react-router-dom';
import React from 'react';
import '../style/home.css';
const Header=(p)=>{   
    return(
    <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">LibroManage</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/details">Details</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/departments">Departments</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/addData">New Entry</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/availability">Availability</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
     {/* <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/details">Details</NavLink>
        </li>
        <li>
          <NavLink to="/departments">Departments</NavLink>
        </li>
        <li>
          <NavLink to="/addData">New Entry</NavLink>
        </li>
        <li>
          <NavLink to="/availabiliity">Availability</NavLink>
        </li>
      </ul>
    </nav> */}
    </>
  );
}

export default Header;
