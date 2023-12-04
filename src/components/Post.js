import styled from 'styled-components'
import star from '../RyanAssets/star.jpg';
import {formatISO9075} from "date-fns";

//Item
const Item = styled.div`
padding: .1rem auto;
margin: 3rem 1rem;
display: flex;
align-items: center;
justify-content: center;

border: 2px solid;
border-radius: 40px;
`

//ImageContainer
const ImageContainer = styled.div`
width: 55%;
margin: 2rem 1rem;
padding: 1rem;
min-height: 150px;
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

export default function Post({title, summary, cover, rating, content, createdAt, author}) {
    return(
      <Item>
        <ImageContainer>
          <img src={'http://localhost:4000/' + cover} />
        </ImageContainer>
        <InfoContainer>
          <Name> {title} : {rating} <Star> <img src={star}/> </Star> </Name>
          <Position>{author.username}</Position>
          <Position><time> {formatISO9075(new Date(createdAt))} </time></Position>
          <Position>{summary}</Position>
        </InfoContainer>
      </Item>
    );
  }