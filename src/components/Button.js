import React from 'react'
import styled from 'styled-components'

//Btn
//hover: makes it shrink
//after: transform: translate: is the invisible border around the button
//       content: uses this to create a non visible block
//       everything else is used for positioning
//hover::after : makes the button border grow as it is being shrunk 
const Btn = styled.button`
display: inline-block;
outline: none;
order: none;
background-color: lightgrey;
opacity: 0.8;
font-size: ${props => props.theme.fontsm};
padding: 0.9rem 2.3rem;
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease;
position: relative;

&:hover{
    transform: scale(0.9);
}

&::after{
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border:2px solid ${props =>props.theme.text};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
}
`

const Button = ({text, link}) => {
  return (
    <Btn>
        <a href={link} aria-label={text} target="_blank" rel = "noreferrer" > 
        {text} 
        </a>
    </Btn>
  )
}

export default Button