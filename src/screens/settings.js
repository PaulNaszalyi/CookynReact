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
import SwitchOnOff from "../components/switchOnOff"
//---

const Back = styled.div`
  position: fixed;
  top: 15px;
  left: 15px;
`

const SubTitle = styled.p`
  font-size: 20px;
  border-bottom: 1px solid #b21f66;
  color: ${props => props.theme.textColor};
`

const LogoutButton = styled.button`
  border: none;
  background-color: ${props => props.theme.primary};
  width: 150px;
  color: #fff;
  padding: 15px;
  font-weight: bold;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Sen', sans-serif;
`

const Settings = (props) => {
    const userInfo = {
        firstname: localStorage.getItem('firstname'),
        lastname: localStorage.getItem('lastname')
    }

    const changeLanguage = (lng = 'fr') => {
        if (props.languageState.language === 'fr') lng = 'en'
        props.actions.language.switchLanguage(lng)
        i18n.changeLanguage(lng)
    }

    const changeTheme = (theme = lightTheme) => {
        if (props.themeState.theme.themeName === 'light') theme = darkTheme
        props.actions.theme.switchTheme(theme)
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
                    <SubTitle>{props.t('settings.changeLanguage')}</SubTitle>
                    <SwitchOnOff
                        id="language"
                        spanLeft="Français"
                        spanRight="English"
                        defaultChecked={(props.languageState.language === "en")}
                        onClick={() => changeLanguage()}
                        language={true}
                    />
                </div>
                <div>
                    <SubTitle>{props.t('settings.changeTheme')}</SubTitle>
                    <SwitchOnOff
                        id="theme"
                        spanLeft={props.t('settings.lightTheme')}
                        spanRight={props.t('settings.darkTheme')}
                        defaultChecked={(props.themeState.theme.themeName === "dark")}
                        onClick={() => changeTheme()}
                    />
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

