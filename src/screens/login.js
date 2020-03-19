import React from 'react'
import styled from 'styled-components'
import LoginForm from "../components/loginForm"
import RegisterFrom from '../components/registerForm'

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 38px;
  text-align: center;
`

const Content = styled.div`
  width: 80vw;
  margin: auto;
  background-color: #fff;
  box-shadow: 0px 0px 5px 0px rgba(212,212,212,1);
  display: flex;
  justify-content: space-between;
`

const Separator = styled.div`
    border: 1px solid #ffbd69;
    margin: 25px 0;
`

const Login = () => {
    return (
        <div>
            <Title>Cook'yn</Title>
            <Content>
                <LoginForm/>
                <Separator/>
                <RegisterFrom/>
            </Content>
        </div>
    )
}

export default Login
