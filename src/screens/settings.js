import React from "react"
import styled from "styled-components"
import TitleH1 from "../components/titleH1"
import Container from "../components/container"
import Logout from "../components/logout"
import Image from "../components/image"
import {lightTheme, darkTheme} from "../config/theme"
//TRANSLATE
import i18n from 'i18next'
import {withTranslation} from 'react-i18next'
//
//---REDUX
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import allTheActions from '../actions'
//---

const Back = styled.div`
  position: fixed;
  top: 15px;
  left: 15px;
`

const LogoutButton = styled.button`
  border: none;
  background-color: ${props => props.theme.primary};
  color: #fff;
  padding: 15px;
  font-weight: bold;
  border-radius: 50px;
  text-transform: uppercase;
`

const SwitchTheme = styled.div`
  color: ${props => props.theme.textColor};
  text-align: center;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 15px;
`

const Settings = (props) => {
    console.log(props)
    const userInfo = {
        firstname: localStorage.getItem('firstname'),
        lastname: localStorage.getItem('lastname')
    }

    const changeLanguage = (lng) => {
        props.actions.language.switchLanguage(lng)
        i18n.changeLanguage(lng)
    }

    return (
        <Container content={
            <>
                <Back>
                    {props.themeState.theme.themeName === 'dark' ?
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
                            props.languageState.language === 'en' ?
                                <SwitchTheme>
                                    <span onClick={() => changeLanguage('fr')}>Français</span>
                                </SwitchTheme> :
                                <SwitchTheme>
                                    <span onClick={() => changeLanguage('en')}>English</span>
                                </SwitchTheme>
                        }
                    </>
                    <>
                        {
                            props.themeState.theme.themeName === 'dark' ?
                                <SwitchTheme>
                                <span onClick={() => props.actions.theme.switchTheme(lightTheme)}>LIGHT MODE</span>
                                </SwitchTheme> :
                                <SwitchTheme>
                                <span onClick={() => props.actions.theme.switchTheme(darkTheme)}>DARK MODE</span>
                                </SwitchTheme>
                        }
                    </>
                </div>
                <LogoutButton onClick={() => Logout()}> {props.t('settings.logout')} </LogoutButton>
            </>
        }/>
    )
}

const mapStateToProps = state => ({
    themeState: state.theme,
    languageState: state.language
})

const mapDispatchToProps = () => dispatch => ({
    actions: {
        theme: bindActionCreators(allTheActions.theme, dispatch),
        language: bindActionCreators(allTheActions.language, dispatch)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Settings))

