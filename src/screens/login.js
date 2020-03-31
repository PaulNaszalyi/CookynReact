import React, {useState} from 'react'
import styled from 'styled-components'
import LoginForm from "../components/loginForm"
import RegsiterForm from "../components/registerForm"
import Background from '../assets/background.jpg'
//---TRANSLATION
import {withTranslation} from 'react-i18next'
//

const Content = styled.div`
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  padding: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
`

const DivButtons = styled.div`
  width: 100%;
`

const Button = styled.button`
  width: 50%;
  height: 50px;
  background-color: ${prop => prop.connexion ?
    props => localStorage.getItem('theme') === 'dark' ? props.theme.darkTheme.primary : props.theme.lightTheme.primary
    : '#fff'};
  color: ${prop => prop.connexion ?
    '#fff'
    : props => localStorage.getItem('theme') === 'dark' ? props.theme.darkTheme.primary : props.theme.lightTheme.primary};
  font-family: 'Sen', sans-serif;
  font-weight: bold;
  font-size: 18px;
  outline: none;
  transition: 0.3s;
  border: 1px solid ${props => localStorage.getItem('theme') === 'dark' ? props.theme.darkTheme.primary : props.theme.lightTheme.primary};
  
  :hover, :focus {
    background-color: ${prop => prop.connexion ? '#b21f66' : 'transparent'};
    color: ${prop => prop.connexion ? '#fff' : '#b21f66'};
  }
`

const Login = ({t}) => {
    const [display, setDisplay] = useState(0)
    return (
        <Content>
            <p><b>{t('index.welcome')}</b></p>
            {display === 0 ?
                <DivButtons>
                    <Button connexion={true} onClick={() => setDisplay(1)}>{t('index.login')}</Button>
                    <Button connexion={false} onClick={() => setDisplay(2)}>{t('index.register')}</Button>
                </DivButtons> : null}

            {display === 1 ? <LoginForm/> : null}
            {display === 2 ? <RegsiterForm/> : null}
        </Content>
    )
}

export default withTranslation()(Login)
