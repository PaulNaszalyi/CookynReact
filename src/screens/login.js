import React, {useState} from 'react'
import styled from 'styled-components'
import LoginForm from "../components/loginForm"
import RegsiterForm from "../components/registerForm"
import Background from '../assets/background.jpg'
//---TRANSLATION
import i18next from 'i18next'
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
  position: fixed;
  top: 0;
  left: 0;
  background-image: url(${Background});
  background-position: center;
  background-size: cover;
`

const DivButtons = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
`

const Button = styled.button`
  width: 50%;
  height: 50px;
  border: none;
  background-color: ${prop => prop.connexion ? '#b21f66' : '#fff'};
  color: ${prop => prop.connexion ? '#fff' : '#b21f66'};
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

const Login = ({t}) => {
    const [display, setDisplay] = useState(0)
    return (
        <Content>
            {display === 0 ?
                <DivButtons>
                    <p>{t('login')}</p>
                    <div>
                        <button onClick={() => i18next.changeLanguage('fr')}>FR</button>
                        <button onClick={() => i18next.changeLanguage('en')}>EN</button>
                    </div>
                    <Button connexion={true} onClick={() => setDisplay(1)}>CONNEXION</Button>
                    <Button connexion={false} onClick={() => setDisplay(2)}>INSCRIPTION</Button>
                </DivButtons> : null}

            {display === 1 ? <LoginForm/> : null}
            {display === 2 ? <RegsiterForm/> : null}
        </Content>
    )
}

export default withTranslation()(Login)
