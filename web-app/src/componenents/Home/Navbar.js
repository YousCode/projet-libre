import React, { PureComponent, useState } from 'react';
import logo from '../../images/logo.png';

class Navbar extends PureComponent {
    render() {
        return(
            <nav className='nav active'>
                <a href='#' className='logo'>
                    <img src={logo} alr='logo' />
                </a>
                <input type='checkbox' className='menu-btn' id='menu-btn' />
                <label className='menu-icon' for='menu-btn'>
                    <span className='nav-icon'></span>
                </label>
                <ul className='menu'>
                    <li><a href='#' className='active'>Home</a></li>
                    <li><a href='#'>Features</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>UI SS</a></li>
                    <li><a href='#'>Download</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;
