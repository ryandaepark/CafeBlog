import React, { useState } from 'react'
import ReactQuill from 'react-quill/'
import 'react-quill/dist/quill.snow.css'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Title = styled.h1`
font-size: ${(props) => props.theme.fontxl};
text-transform: capitalize;
display: flex;
border-bottom: 2px solid ${(props) => props.theme.body};
`

const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    ['clean']
  ]
};

const formats = [
'header',
'bold', 'italic', 'underline', 'strike', 'blockquote',
'list', 'bullet', 'indent',
'link', 'image'
];

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  //String manipulation to get parent page name
  const url = location.pathname;
  const urlParts = url.split('/');
  const postType = urlParts[urlParts.length - 2];

  async function createNewPost(ev) {
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);
    data.set('type', postType)

    ev.preventDefault();
    const response = await fetch('http://localhost:4000/post', {
      method:'POST', 
      body: data,
    })

    if (response.ok) {
      navigate(-1);
    }
  }

  return (    
    <>

        <form class="h-screen flex flex-col justify-top gap-5 p-10" onSubmit={createNewPost}>
            <Title> Create new Post </Title>
            <input 
              type="title" 
              class="border h-8" 
              placeholder={'Title'} 
              value={title} 
              onChange={ev => setTitle(ev.target.value)}
            />
            <input 
              type="summary" 
              class="border h-8" 
              placeholder={'Summary'}
              value={summary}
              onChange={ev => setSummary(ev.target.value)}
            />
            <input 
              type="file" 
              class="border" 
              onChange={ev => setFiles(ev.target.files)}
            />
            <ReactQuill 
              modules={modules} 
              formats={formats} 
              value={content} 
              onChange={newValue => setContent(newValue)}

            />
            <button class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded mt-10 "> 
              Create post 
            </button>
        </form>
    </>
  )
}

export default CreatePost