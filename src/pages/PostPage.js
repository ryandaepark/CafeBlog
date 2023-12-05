import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { formatISO9075 } from "date-fns";

const Section = styled.section`
flex-direction: column;
display: flex;
min-height: 80vh;
align-items: center;
width: 40;
`

const TextBlock = styled.section`
margin: 0 10rem 1rem;
`

const Centered = styled.div`
text-align: center;
padding-bottom: .75rem;
`

const Title = styled.h1`
font-size: ${(props) => props.theme.fontxl};
text-transform: capitalize;
display: flex;
margin: 1rem 0 0;
width: fit-content;
`

export default function PostPage() {
    const [postInfo, setPostInfo] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setPostInfo(postInfo);
                });
            });
    }, []);

    if (!postInfo) return '';
 
    return(
    <Section>
        <Title>{postInfo.title}</Title>
        <time class="text-sm pb-1"> {formatISO9075(new Date(postInfo.createdAt))}</time>
        <div class="pb-5"> By {postInfo.author.username} </div>
        <img src={`http://localhost:4000/${postInfo.cover}`} class="w-80 pb-5"/>
        <TextBlock>
        <div dangerouslySetInnerHTML={{__html:postInfo.content}} />
        </TextBlock>
    </Section>            
    );
}
