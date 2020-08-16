import React, { Component } from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <div className="Navbar">
            <ul>
                <Link style={{textDecoration: 'none'}} to="/"><li className="grow"> Home</li></Link>
                <Link style={{textDecoration: 'none'}} to="/Pistols"><li className="grow"> Pistols</li></Link>
                <Link style={{textDecoration: 'none'}} to="/SMGs"><li className="grow"> SMGs</li></Link>
                <Link style={{textDecoration: 'none'}} to="/Rifles"><li className="grow"> Rifles</li></Link>
            </ul>
        </div>
    )
}

export default Navbar