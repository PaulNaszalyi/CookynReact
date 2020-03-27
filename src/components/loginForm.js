import React, {useState} from 'react'
import styled from 'styled-components'
import LabelForm from "./labelForm"
import InputForm from "./inputForm"
import RedStar from "./redStar"
import Image from "./image"
import Background from '../assets/background2.jpg'
import {useHistory} from "react-router"
//---REDUX
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import allTheActions from '../actions'
//---

const Formulaire = styled.form`
  width: 75vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  padding-top: 25px;
`

const DivForm = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 350px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-image: url(${Background});
  background-position: center;
  background-size: cover;
  color: #fff;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`

const DivClose = styled.div`
  background-color: ${props => localStorage.getItem('theme') === 'dark' ? props.theme.darkTheme.primary : props.theme.lightTheme.primary};
  box-shadow: 0px 0px 5px 0px rgba(138,29,82,1);
  border-radius: 100px;
  margin-top: 20px;
  padding: 20px 22px;
`

const Button = styled.button`
  width: 50%;
  height: 50px;
  margin: 15px auto;
  border: 1px solid #fff;
  background-color: transparent;
  color: #fff;
  font-family: 'Sen', sans-serif;
  font-weight: bold;
  font-size: 18px;
  outline: none;
  transition: 0.3s;
`

const LoginForm = props => {
    const [data, setData] = useState({})
    const history = useHistory()

    const handleChange = event => {
        setData({...data, [event.target.name]: event.target.value})
    }

    const handleClick = async event => {
        event.preventDefault()
        if (await props.actions.login.callLogin(data)) window.location.reload()
    }

    return (
        <DivForm>
            <DivClose onClick={() => history.push('/home')}>
                <Image src={require("../assets/close.png")} width={20} height={20}/>
            </DivClose>
            <Formulaire onSubmit={handleClick}>
                <div>
                    <LabelForm label="ADRESSE MAIL"/><RedStar/><br/>
                    <InputForm name="email" onChange={handleChange}/><br/>
                    <LabelForm label="MOT DE PASSE"/><RedStar/><br/>
                    <InputForm type="password" name="password" onChange={handleChange}/><br/>
                </div>
                <Button>CONNEXION</Button>
            </Formulaire>
        </DivForm>
    )
}


const mapStateToProps = state => ({
    loginState: state.login
})

const mapDispatchToProps = () => dispatch => ({
    actions: {
        login: bindActionCreators(allTheActions.login, dispatch)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
