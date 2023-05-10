import React from 'react';
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <>
            <nav className = "navbar">
                <div className="nav-container">
                    <NavLink to="/" className="name-left-corner" > Naviagtion Bar Section </NavLink>

                </div>

            </nav>
        </>
    );
}

export default NavBar;