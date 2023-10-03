import React from 'react'
import styled from 'styled-components'
import img1 from '../assets/Nfts/bighead-5.svg';
import img2 from '../assets/Nfts/bighead-1.svg';
import img3 from '../assets/Nfts/bighead-2.svg';
import img4 from '../assets/Nfts/bighead.svg';
import img5 from '../assets/Nfts/bighead-4.svg';
import img6 from '../assets/Nfts/bighead-8.svg';
import img7 from '../assets/Nfts/bighead-6.svg';
import img8 from '../assets/Nfts/bighead-3.svg';

//Section
//First block
const Section = styled.section`
min-height: 100vh;
width:100vw;
position: relative;
`

//Title
//border-bottom + width : underlines the text 
const Title = styled.h1`
font-size: ${(props) => props.theme.fontxl};
text-transform: capitalize;
display: flex;
margin: 1rem auto;
padding: 1rem 0;
border-bottom: 2px solid ${(props) => props.theme.body};
width: fit-content;
`

//Container
const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
`

//Item
const Item = styled.div`
padding: 2rem 0;
margin: 2rem 1rem;
position: relative;

border: 2px solid;
border-radius: 40px;

&:hover{
  img{
    transform: translateY(-1rem) scale(1.05);
  }
}
`

//ImageContainer
const ImageContainer = styled.div`
width: 15rem;
margin: 2rem 1rem;
border: 2px solid;
padding: 1rem;

border-radius: 30px;
cursor: pointer;

img{
  width: 100%;
  height: auto;
  transition: all 0.3s ease;
}
`

//Name
const Name = styled.h2`
font-size: ${props => props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
margin-top: 1rem;
`

//Position
const Position = styled.h2`
font-size: ${props => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;
margin-top: 1rem;
font-weight: 400;
`

const MemberComponent = ({img, name=" ", rating=" ", description=" "}) => {
  return(
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}: {rating}</Name>
      <Position>{description}</Position>
    </Item>
  )
}

const Cafes = () => {
  return (
    <Section>
      <Title> All Posts </Title>
      <div class="grid grid-cols-4 gap-4">
        <MemberComponent img={img1} name="Ry"  rating="5.0" description="Lead Dev" />
        <MemberComponent img={img2} name="JiJi" rating="5.0" description="Dev" />
        <MemberComponent img={img3} name="Ishi" rating="5.0" description="Youtuber" />
        <MemberComponent img={img4} name="Matt" rating="5.0" description="Leader" />
        <MemberComponent img={img5} name="Limey" rating="5.0" description="Model" />
        <MemberComponent img={img6} name="Danyuck" rating="5.0" description="Dog Lover" />
        <MemberComponent img={img7} name="Ish" rating="5.0" description="Sports Enthusiast" />
        <MemberComponent img={img8} name="Sky" rating="5.0" description="Nail Tech" />
      </div>
    </Section>
  )
}

export default Cafes