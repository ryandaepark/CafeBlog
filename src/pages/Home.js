import { React } from "react";
import styled, { keyframes } from 'styled-components'
import TypeWriterText from '../components/TypeWriterText'
import CoffeeBanner from '../RyanAssets/man-serving-cup-coffee.svg'


//Section
//min-height : This is calculating spacing per window size before scroll
const Section = styled.section`
min-height: ${props => `calc(100vh - ${props.theme.navHeight})`};
width: 100vw;
position: relative;
background-color: ${props => props.theme.body};
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
min-height: 80vh;
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

//rotate : rotating image for below "Round" 
const rotate = keyframes`
100%{
  transform: rotate(1turn);
}
`

//Round
//position: absolute: places at center of screen
//height: auto; sets it to the size that makes it visible
//bottom-height brings it to the bottom left corner
//border + border-radius: creates the 1px circle around the rotating img
const Round = styled.div`
position: absolute;
bottom: 2rem;
right: 90%;
width: 6rem;
height: 6rem;
border: 1px solid ${props => props.theme.text};
border-radius: 50%;

img{
  width:100%;
  height: auto;
  animation: ${rotate} 6s linear infinite reverse;
}
`

//Circle -> creating circle around the arrow and placing inside the 
//          RoundTextBlack circle
const Circle = styled.span`
width: 3rem;
height: 3rem;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;

position: absolute;
top:50%;
left: 50%;
transform: translate(-50%, -50%);

background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
font-size: 1.5rem;
`

const ImageContainer = styled.span`
top: 2rem;
width: 70%;
height: auto;
padding-top: 1em;
`

const Home = () => {
  return (
    <Section>
      <Container>
        <Box> <TypeWriterText /> </Box>

        <Box> 
          <ImageContainer> 
            <img src={CoffeeBanner} /> 
          </ImageContainer> 
        </Box>

      </Container>
    </Section>
  )
}

export default Home