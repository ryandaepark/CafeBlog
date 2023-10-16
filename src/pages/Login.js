import React from 'react'
import styled from 'styled-components'

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
  border: 1px solid black; 
  width:100%;
  height: 40px;
  box-sizing: border-box;
}
`

const Login = () => {
  return (
    <Section>
      <form>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>Login</button>
      </form>
    </Section>
  )
}

export default Login