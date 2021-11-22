import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaReact } from 'react-icons/fa';

function Navbar() {

    const navStyle ={
        color : 'black'
    };

    return (
        <nav className="navbar">
            <FaReact style={{fontSize:"8vh"}} />
            <h2>SIIM-COVID19-Detection</h2>
            <div className="navlink">
                <Link to="/" style={navStyle}>
                    <li>Home</li>
                </Link>
                <Link to="/dicom" style={navStyle}>
                    <li>DCM</li>
                </Link>
                <Link to="/about" style={navStyle}>
                    <li>About</li>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;