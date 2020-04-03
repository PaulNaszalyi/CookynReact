import React from "react"
import styled from "styled-components"
import TitleH1 from "../components/titleH1"
import Container from "../components/container"
import Logout from "../components/logout"
import Image from "../components/image"
//TRANSLATE
import i18n from 'i18next'
import {withTranslation} from 'react-i18next'
//

const Back = styled.div`
  position: fixed;
  top: 15px;
  left: 15px;
`

const LogoutButton = styled.button`
  border: none;
  background-color: ${props => localStorage.getItem('theme') === 'dark' ? props.theme.darkTheme.primary : props.theme.lightTheme.primary};
  color: #fff;
  padding: 15px;
  font-weight: bold;
  border-radius: 50px;
  text-transform: uppercase;
`

const SwitchTheme = styled.div`
  color: ${props => localStorage.getItem('theme') === 'dark' ? props.theme.darkTheme.textColor : props.theme.lightTheme.textColor};
  text-align: center;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 15px;
`

const Settings = ({t}) => {

    const changeLang = language => {
        changeLanguage(language)
        localStorage.setItem('language', language)
        window.location.reload()
    }

    const changeTheme = theme => {
        localStorage.setItem('theme', theme)
        //window.location.reload()
    }

    const userInfo = {
        firstname: localStorage.getItem('firstname'),
        lastname: localStorage.getItem('lastname')
    }

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (
        <Container content={
            <>
                <Back>
                    {localStorage.getItem('theme') === 'dark' ?
                        <Image src={require("../assets/backDark.png")} width={30} height={30}
                               margin={"10px"}
                               onClick={() => window.history.back()}/>
                        :
                        <Image src={require("../assets/backLight.png")} width={30} height={30}
                               margin={"10px"}
                               onClick={() => window.history.back()}/>
                    }

                </Back>
                <TitleH1 title={`${userInfo.firstname} ${userInfo.lastname}`}/>
                <div>
                    <>
                        {
                            localStorage.getItem('language') === 'en' ?
                                <SwitchTheme>
                                    <span onClick={() => changeLang('fr')}>Français</span>
                                </SwitchTheme> :
                                <SwitchTheme>
                                    <span onClick={() => changeLang('en')}>English</span>
                                </SwitchTheme>
                        }
                    </>
                    <>
                        {
                            localStorage.getItem('theme') === 'dark' ?
                                <SwitchTheme>
                                <span onClick={() => changeTheme('light')}>LIGHT MODE</span>
                                </SwitchTheme> :
                                <SwitchTheme>
                                <span onClick={() => changeTheme('dark')}>DARK MODE</span>
                                </SwitchTheme>
                        }
                    </>
                </div>
                <LogoutButton onClick={() => Logout()}> {t('settings.logout')} </LogoutButton>
            </>
        }/>
    )
}

export default withTranslation()(Settings)
