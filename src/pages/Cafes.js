import styled from 'styled-components'
import testing from '../RyanAssets/coffee_test.jpeg';
import star from '../RyanAssets/star.jpg';
import { React } from "react";

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
padding: .1rem auto;
margin: 3rem 1rem;
display: flex;
align-items: center;
justify-content: center;

border: 2px solid;
border-radius: 40px;

${'' /* &:hover{
  img{
    transform: translateY(-1rem) scale(1.05);
  }
} */}
`

//ImageContainer
const ImageContainer = styled.div`
width: 55%;
margin: 2rem 1rem;
padding: 1rem;

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
margin-top: 1rem;
`

//Position
const Position = styled.h2`
font-size: ${props => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
margin-top: 1rem;
font-weight: 400;
`

//InfoContainer
const InfoContainer = styled.div`
width: 50%;
height: 100%;
padding-right: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Star = styled.div`
width: 12%;
`

const MemberComponent = ({img, name=" ", rating=" ", description=" "}) => {
  return(
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <InfoContainer>
        <Name>
          {name} : {rating} <Star> <img src={star}/> </Star>
        </Name>
        <Position>{description}</Position>
      </InfoContainer>
      
    </Item>
  )
}

const Cafes = () => {
  return (
    <Section>
      <Title> All Posts </Title>
      <Link class = "flex justify-center" to = "create"> Create new post </Link>
      <div class="grid grid-cols-3 gap-3">
        <MemberComponent img={testing} name="Cafe-1"  rating="5.0" description="Super cool cafe in orange county. The coffee was meh but the matcha was amazing. Would come here again" />
        <MemberComponent img={testing} name="JiJi" rating="5.0" description="Dev" />
        <MemberComponent img={testing} name="Matt" rating="5.0" description="Leader" />
        <MemberComponent img={testing} name="Limey" rating="5.0" description="Model" />
        <MemberComponent img={testing} name="Ishi" rating="5.0" description="Youtuber" />
        <MemberComponent img={testing} name="Danyuck" rating="5.0" description="Dog Lover" />
        <MemberComponent img={testing} name="Ish" rating="5.0" description="Sports Enthusiast" />
        <MemberComponent img={testing} name="Sky" rating="5.0" description="Nail Tech" />
      </div>
    </Section>
  )
}

export default Cafes