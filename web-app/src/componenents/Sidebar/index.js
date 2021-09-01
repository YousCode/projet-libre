import React from 'react';
import {
    SidebarContainer,
    CloseIcon,
    Icon,
    SidebarWraper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWraper>
                <SidebarMenu>
                    <SidebarLink to='about'>
                        Discover
                    </SidebarLink>
                    <SidebarLink to='services'>
                        Services
                    </SidebarLink>
                    <SidebarLink to='about'>
                        About
                    </SidebarLink>
                    <SidebarLink to='signup'>
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWraper>
        </SidebarContainer>
    )
}

export default Sidebar
