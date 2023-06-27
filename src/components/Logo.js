import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// This is to make the logo grow in size when hovered over it
// STARTS @ transition to hover
const LogoText = styled.h1`
font-family: 'Akaya Telivigala', cursive;
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.text};

transition: all 0.2s ease;
&:hover{
    transform: scale(1.1);
}
`

const Logo = () => {
  return (
    <LogoText>
        <Link to= "/">
        WABT
        </Link>
    </LogoText>
  )
}

export default Logo