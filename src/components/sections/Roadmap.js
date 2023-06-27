import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'
import { useLayoutEffect } from 'react'
import styled from 'styled-components'
import DrawSvg from '../DrawSvg'

//Section
//First block
const Section = styled.section`
min-height: 100vh;
width:100vw;
background-color: ${props => props.theme.body};
position: relative;
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
//positions the items and the svg image
const Container = styled.div`
width: 70%;
height: 200vh;
background-color: ${(props) => props.theme.body};
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`

//SvgContainer
//contains the svg image file
const SvgContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

//Items + ItemContainer + Box + SubTitle + Text used to set up the RoadMapItem which
//is then called inside the main method RoadMap

//Items
// contains the items that are on the side of the roadmap
// + places every other item to the right
// &>*:nth-of-type(2n+1) : every odd element
// &>*:nth-of-type(2n) : every even element
// ^ the div is pointing at ItemContainer
// ^ the p is pointing at Box
// 50px 0 50px 0 (The 50px create a rounded look + it goes TL TR BL BR)
const Items = styled.ul`
list-style: none;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;

&>*:nth-of-type(2n+1){
  justify-content: start;

  div{
    border-radius: 50px 0 50px 0;
    text-align: right;
  }
  p{
    border-radius: 40px 0 40px 0;
  }
}

&>*:nth-of-type(2n){
  justify-content: end;

  div{
    border-radius: 0 50px 0 50px;
    text-align: left;
  }
  p{
    border-radius: 0 40px 0 40px;
  }
}
`

//Item
//each individual item edit
const Item = styled.li`
width: 100%;
height: 100%;
display: flex;
`

//Item Container
//container for each block
const ItemContainer = styled.div`
width: 40%;
height: fit-content;
padding: 1rem;
border: 3px solid ${props => props.theme.text}
`

//Box
//adds box around each item
const Box = styled.p`
height: fit-content;
background-color: ${props => props.theme.carouselColor};
color: ${props => props.theme.text};
padding: 1rem;
position: relative;
border: 1px solid ${props => props.theme.text};

`

//SubTitle
//Title of each box
const SubTitle = styled.span`
display: block;
font-size: ${props => props.theme.fontxl};
text-transform: capitalize;
color: ${props => props.theme.text};
`

//Text
//text under each title of each box
const Text = styled.span`
display: block;
font-size: ${props => props.theme.fontsm};
text-transform: capitalize;
color: ${props => props.theme.text};

font-weight: 400;
margin: 0.5rem 0;
`

//RoadMapItem
//collects all the above and puts together each road map item
//input: title, subtext, addToRef
const RoadMapItem = ({title, subtext, addToRef}) => {
  return(
    <Item ref = {addToRef}>
      <ItemContainer>
        <Box>
          <SubTitle>{title}</SubTitle>
          <Text>{subtext}</Text>
        </Box>
      </ItemContainer>
    </Item>
  )
}

const Roadmap = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if(el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  }

  useLayoutEffect(() => {
    let tl = gsap.timeline();
    revealRefs.current.forEach((el, index) => {
      tl.fromTo (
        el.childNodes[0],
        {
          y: '0' //Do nothing
        }, {
          y: '-30%', //This moves all Item elements up by 30% 

          scrollTrigger: {
            id: `section-${index+1}`, //assigning id to grab individual element in the future
            trigger: el,
            start: 'top center += 200px', 
            end: 'bottom center',
            scrub: true //makes animation smoother
            //markers: true
          }
        }
      )
      }
    )

    return () => {
      
    };
  }, [])

  return (
    <Section>
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item> {/* empty item */}
          <RoadMapItem addToRef = {addToRefs} title="Grand Opening" subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."/>
          <RoadMapItem addToRef = {addToRefs} title="Great Benefits" subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."/>
          <RoadMapItem addToRef = {addToRefs} title="Early Access" subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."/>
          <RoadMapItem addToRef = {addToRefs} title="New Merch" subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."/>
          <RoadMapItem addToRef = {addToRefs} title="Holders Ranking" subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."/>
        </Items>
      </Container>
    </Section>
    
  )
}

export default Roadmap