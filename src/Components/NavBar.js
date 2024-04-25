import React from "react";
import classes from './NavBar.module.css';
import flowerPng from '../Assets/flower.jpg';
import { NavLink } from "react-router-dom";

function NavBar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" >Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                            </li>
                            <li className="nav-item dropdown">
                                {/* <NavLink className="nav-link dropdown-toggle" to="/portfolio" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> */}
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Portfolio
                                    {/* </NavLink> */}
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><NavLink className="dropdown-item" to="/portfolio/drawings">Drawings</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/portfolio/paintings">Paintings</NavLink></li>
                                    {/* <li><a className="dropdown-divider"/></li> */}
                                    <li><NavLink className="dropdown-item" to="/portfolio/digital">Anime Art</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li> */}
                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
