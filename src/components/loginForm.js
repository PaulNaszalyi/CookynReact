import React, {useState} from 'react'
import styled from 'styled-components'
import LabelForm from "./labelForm"
import InputForm from "./inputForm"
import RedStar from "./redStar"
import Image from "./image"
import Background from '../assets/background2.jpg'
import {useHistory} from "react-router"
import ButtonForm from "./buttonForm"
import Form from "./loginForms"
//---REDUX
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import allTheActions from '../actions'
//---

const DivForm = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 350px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  color: #323232;
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

const LoginForm = props => {
    const [data, setData] = useState({})
    const history = useHistory()

    const handleChange = event => {
        setData({...data, [event.target.name]: event.target.value})
    }

    const handleClick = async event => {
        event.preventDefault()
        if (await props.actions.login.login(data).query) window.location.reload()
    }

    return (
        <DivForm>
            <DivClose onClick={() => history.push('/home')}>
                <Image src={require("../assets/close.png")} width={20} height={20}/>
            </DivClose>
            <Form
                content={
                    <>
                        <div>
                            <LabelForm label="ADRESSE MAIL"/><RedStar/><br/>
                            <InputForm name="email" onChange={handleChange}/><br/>
                            <LabelForm label="MOT DE PASSE"/><RedStar/><br/>
                            <InputForm type="password" name="password" onChange={handleChange}/><br/>
                        </div>
                        <ButtonForm value="CONNEXION"/>
                    </>
                }
                onSubmit={handleClick}
            />
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
