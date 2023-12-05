import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import linkedIn from '../RyanAssets/LI-In-Bug.png'
import mainLogo from '../RyanAssets/Cover.png'

const Section = styled.section`
flex-direction: column;
display: flex;
min-height: 80vh;
justify-content: center;
align-items: center;
width: 40;
`

const TextBlock = styled.section`
margin: 0 10rem 1rem;
text-align: center;
`

const AboutUs = () => {
  return (
    <Section>
      <img src={mainLogo} class="w-80"/>
      <TextBlock>
      This is BrewTime, a project I created to learn full stack development skills.
      This was developed using MERN and made with the intention of keeping track of all 
      the breweries and the cafes that my girlfriend and I have been to. Most of these are based in Southern
      California. Each post will have our own personal experiences and our opinions on location,
      food, or/and drinks. I hope you enjoy our blog and if you feel like you want us to try any 
      new places feel free to reach out to me through my LinkedIn link below.
      </TextBlock>
      <TextBlock> Enjoy! </TextBlock>
      <TextBlock> Ryan and Caro </TextBlock>
      <Link> <img src={linkedIn} class="w-12"/> </Link>
    </Section>
  )
} 

export default AboutUs