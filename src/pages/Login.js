import React, { useState } from 'react'
import styled from 'styled-components'
import {Navigate} from 'react-router-dom'

const Title = styled.h1`
font-size: ${(props) => props.theme.fontxl};
text-transform: capitalize;
display: flex;
margin: 1rem auto;
padding: 1rem 0;
border-bottom: 2px solid ${(props) => props.theme.body};
width: fit-content;
`

const Section = styled.section`
display: flex;
min-height: 80vh;
justify-content: center;
align-items: center;

input{
  margin-bottom: 8px;
  width: 100%;
  padding: 10px 7px;
  border: 2px solid #ddd;
  background-color: #fff;
}

form{
  max-width: 400px;
  margin: 0 auto;
}

button{
  width:100%;
  height: 40px;
  display: block;
  background-color: #555;
  border: 0;
  color: #fff;
  border-radius: 5px;
  padding: 7px 0;
}
`

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function login(ev) {
    ev.preventDefault();

    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });

    if (response.ok) {
      setRedirect(true);
    } else {
      alert('wrong credentials');
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <Section>
      <form onSubmit={login}>
      <Title> Welcome Back! </Title>
        <input 
          type="text" 
          placeholder="username" 
          value={username}
          onChange={ev => setUsername(ev.target.value)}
        />

        <input 
          type="password" 
          placeholder="password" 
          value={password}
          onChange={ev => setPassword(ev.target.value)}
        />

        <button>Login</button>
      </form>
    </Section>
  )
}

export default Login