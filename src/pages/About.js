import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Carousel from '../components/Carousel'
import Button from '../components/Button'
import {dark} from '../styles/Themes'

const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
position: relative;
`

//Container
//width: affects side borders (works with margin)
//min-height: affects bottom border (Note: vh = screen height percent, 
//            vw = screen width percent)
//margin: creating the boarder on the left side (using 0 to say left and auto
//        for auto-assigning left and ride size)
//display: flex : makes things in container to be written in-line
//justify-content: center: makes it centered horizontally
//align-items: center: makes it centered vertically
const Container = styled.div`
width: 75%;
margin: 0 auto;
/* background-color: lightblue; */

display: flex;
justify-content: center;
align-items: center;
`

//Box
//width: + height: changing the text and video (mainly width)
//flex-direction: makes it expand downward
const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Title = styled.h2`
font-size: ${(props) => props.theme.fontxxl};
text-transform: capitalize;
color: ${(props) => props.theme.body};
align-self: flex-start;
width: 80%;
margin: 0 auto;
`

const SubText = styled.p`
font-size: ${(props) => props.theme.fontlg};
color: ${(props) => props.theme.body};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight: 400;
`

const SubTextLight = styled.p`
font-size: ${(props) => props.theme.fontmd};
color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight: 400;
`

const ButtonContainer = styled.div`
width: 80%;
margin: 1rem auto;
align-self: flex-start;
`

const About = () => {
  return (
    <Section>
      <Container>
        <Box> <Carousel /> </Box>
        <Box> 
          <Title>
            Welcome To WABT.
          </Title>
          <SubText>
            WABT is a passion project that covers all the interests of our group of friends. Our most notable interests include our personal reviews of breweries and cafes that we have been to around California, apparel reviews for popular clothing brands, and our journey into learning golf.
          </SubText>
          <SubTextLight>
            If you have similar interests, you can join our mailing list to get up to date uploads on our site! If you have anything you would like to see more of feel free to reach out to us through our socials. 
          </SubTextLight>
          <ButtonContainer>
            <ThemeProvider theme ={dark}>
              <Button text="JOIN OUR MAILING LIST" link="#"/>
            </ThemeProvider>
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  )
}

export default About