import React, {useState} from 'react'
import styled from 'styled-components'
import LoginForm from "../components/loginForm"
import RegsiterForm from "../components/registerForm"

const Content = styled.div`
  height: 100vh;
  box-sizing: border-box;
  padding: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 48px;
  text-align: center;
  margin: 50px 0;
  font-family: 'Roboto Slab', serif;
`

const DivButtons = styled.div`
  margin-bottom: 150px;
`

const Button = styled.button`
  width: 50%;
  height: 50px;
  border: 1px solid #b21f66;
  background-color: ${prop => prop.connexion ? 'transparent' : '#b21f66'};
  color: ${prop => prop.connexion ? '#b21f66' : '#fff'};
  font-family: 'Sen', sans-serif;
  font-weight: bold;
  font-size: 18px;
  outline: none;
  transition: 0.3s;
  
  :hover, :focus {
    background-color: ${prop => prop.connexion ? '#b21f66' : 'transparent'};
    color: ${prop => prop.connexion ? '#fff' : '#b21f66'};
  }
`

const Login = () => {
    const [display, setDisplay] = useState(0)
    return (
        <Content>
            <p>Bienvenue sur</p>
            <Title onClick={() => setDisplay(0)}>Cook'yn</Title>

        {display === 0 ? <DivButtons>
                            <Button connexion={true} onClick={() => setDisplay(1)}>CONNEXION</Button>
                            <Button connexion={false} onClick={() => setDisplay(2)}>INSCRIPTION</Button>
                        </DivButtons> : null}

        {display === 1 ? <LoginForm/> : null}
        {display === 2 ? <RegsiterForm/> : null}

        </Content>
    )
}

export default Login
