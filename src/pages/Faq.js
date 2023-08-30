import React from 'react'
import styled from 'styled-components'
import Accordion from '../components/Accordion'

//Section
//First block
const Section = styled.section`
min-height: 100vh;
width:100vw;
background-color: ${props => props.theme.body};
position: relative;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

//Title
//border-bottom + width : underlines the text 
const Title = styled.h1`
font-size: ${(props) => props.theme.fontxxl};
text-transform: capitalize;
color: ${(props) => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
border-bottom: 2px solid ${(props) => props.theme.text};
width: fit-content;
`

//Container
const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center;
`

//Box
const Box = styled.div`
width: 45%;
`

const Faq = () => {
  return (
    <Section>
      <Title>Faq</Title>
      <Container>
        <Box>
          <Accordion title ="WHERE CAN I VIEW MY NFTS?">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt consequatur quisquam maxime molestias dolores ipsum, exercitationem vel sint quidem aliquam modi quis impedit corporis unde inventore fugiat provident in.
          </Accordion>
          <Accordion title ="WHERE CAN I VIEW MY NFTS?">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt consequatur quisquam maxime molestias dolores ipsum, exercitationem vel sint quidem aliquam modi quis impedit corporis unde inventore fugiat provident in.
          </Accordion>
          <Accordion title ="WHERE CAN I VIEW MY NFTS?">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt consequatur quisquam maxime molestias dolores ipsum, exercitationem vel sint quidem aliquam modi quis impedit corporis unde inventore fugiat provident in.
          </Accordion>
        </Box>
        <Box>
          <Accordion title ="WHERE CAN I VIEW MY NFTS?">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt consequatur quisquam maxime molestias dolores ipsum, exercitationem vel sint quidem aliquam modi quis impedit corporis unde inventore fugiat provident in.
          </Accordion>
          <Accordion title ="WHERE CAN I VIEW MY NFTS?">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt consequatur quisquam maxime molestias dolores ipsum, exercitationem vel sint quidem aliquam modi quis impedit corporis unde inventore fugiat provident in.
          </Accordion>
          <Accordion title ="WHERE CAN I VIEW MY NFTS?">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt consequatur quisquam maxime molestias dolores ipsum, exercitationem vel sint quidem aliquam modi quis impedit corporis unde inventore fugiat provident in.
          </Accordion>
        </Box>
      </Container>
    </Section>
  )
}

export default Faq