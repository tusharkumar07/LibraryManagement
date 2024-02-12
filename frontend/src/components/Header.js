import { NavLink } from 'react-router-dom';
import React from 'react';
import '../style/home.css';
import logoImg from "../img/logoImg.png";
const Header=(p)=>{   
    return(
    <>
     <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#1B4242",color:"white"}}>
      <div className="container">
        <NavLink className="navbar-brand" to="/"><img src={logoImg} className='logoImg'/></NavLink>
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
            <li className="nav-item" >
              <NavLink className="nav-link text-white" activeClassName="active" to="/details">Details</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white"  activeClassName="active" to="/addData">New Entry</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" activeClassName="active" to="/availability">Availability</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" activeClassName="active" to="/issued">Issued</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
     
    </>
  );
}

export default Header;
