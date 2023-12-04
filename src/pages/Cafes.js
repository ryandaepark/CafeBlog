import styled from 'styled-components'
import { React, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Post from '../components/Post'

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

const Cafes = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);

  const cafes = posts.filter((post) => post.type === "cafes")

  return (
    <Section>
      <Title> All Posts </Title>
      <Link class = "flex justify-center" to = "create"> Create new post </Link>
      <div class="grid grid-cols-3 gap-3">
        {posts.length > 0 && cafes.map(cafe =>(
          <Post {...cafe} />
        ))}
      </div>
    </Section>
  )
}

export default Cafes