import React from "react";
import './nav.css';


const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light">
    <a className="navbar-brand" href="index.html"><h1>Choice</h1></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="blank" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Go To...
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="blank">Your Bands</a>
            <a className="dropdown-item" href="blank">Your Eats</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="blank">Map</a>
          </div>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="blank">Sign In</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
