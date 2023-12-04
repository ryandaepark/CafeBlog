import styled from "styled-components";
import Logo from "./Logo";
import Button from "./Button";
import { React, useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { UserContext } from "./UserContext";

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
    const {setUserInfo, userInfo} = useContext(UserContext)
    
    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
            });
        });
    }, []);

    function logout() {
        fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'POST',
        });
        setUserInfo(null);
    }

    const username = userInfo?.username;

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
                    <Link to="/breweries"> 
                    <MenuItem>Breweries</MenuItem>
                    </Link>
                    <Link to="/aboutus"> 
                    <MenuItem>About Us</MenuItem>
                    </Link>
                </Menu>

                <Menu>
                {username && (
                    <>
                        <a onClick={logout}> 
                        <MenuItem>Logout</MenuItem>
                        </a>
                    </>
                )}
                {!username && (
                    <>
                        <Link to="/login"> 
                        <MenuItem>Login</MenuItem>
                        </Link>
                        <Link to="/register"> 
                        <MenuItem>Register</MenuItem>
                        </Link>
                    </>
                )}
                    
                </Menu>

            </NavBar>
        </Section>
    )
}

export default Navigation;