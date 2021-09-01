import React, { PureComponent } from 'react';
import Navbar from './Navbar';

class Header extends PureComponent {
    render() {
        return(
            <div id='main'>
                <Navbar />
                <div className='name'>
                    <h1><span>Finding your fit,</span> has never been easier</h1>
                    <p className='details'>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                    <a href='#' className='cv-btn'>Hire !</a>
                </div>
            </div>
        )
    }
}

export default Header
