import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Button from "./Button";
import { Link } from 'react-router-dom';

const Section = styled.section`
width: 100vw;
background-color: ${props => props.theme.body};
`
const NavBar = styled.nav`
display:flex;
justify-content: space-between;
align-items: center;
width: 85%;
height: ${props => props.theme.navHeight};
margin: 0 auto;
`
const Menu = styled.ul`
display: flex;
justify-content: space:between;
align-items: center;
list-style: none;
`

//This is where the menu item is being styled
//The after and hover is being used to create a line underneath the selection
//NOTE: connected by using &:hover::after (this connected the prev and the
//       next statement)
const MenuItem = styled.li`
margin: 0 1rem;
color: ${props => props.theme.text};
cursor: pointer;

&::after{
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background: ${props => props.theme.text};
    transition: width 0.3s ease;
}
&:hover::after{
    width: 100%;
}

`



const Navigation = () => {
    return (
        <Section>
            <NavBar>
                <Logo />
                <Menu>
                    <Link to="/"> 
                        <MenuItem>Home</MenuItem>
                    </Link>

                    <Link to="/cafes"> 
                    <MenuItem>Cafes</MenuItem>
                    </Link>

                    <Link to="/aboutus"> 
                    <MenuItem>About Us</MenuItem>
                    </Link>

                </Menu>
                <Button text ="Login" link="https://google.com" />

            </NavBar>
        </Section>
        

    )
}

export default Navigation;