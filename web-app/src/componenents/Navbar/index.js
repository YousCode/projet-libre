import React from 'react'
import { 
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';
import { FaBars } from 'react-icons/fa'

const Navbar = ({ toggle }) => {
    return (
        <div>
           <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        Kodly
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='discover'>
                                Discover
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'>
                                Services
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='about'>
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup'>
                                Sign Up
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='signin'>
                            Sign In
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
           </>
        </div>
    )
}

export default Navbar
