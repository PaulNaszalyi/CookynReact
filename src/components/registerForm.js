import React, {useState} from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import RedStar from "./redStar"
import Image from "./image";
import InputForm from "./inputForm"
import LabelForm from "./labelForm"
import ButtonForm from "./buttonForm"
import Form from "./loginForms"
//---REDUX
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import allTheActions from '../actions'
//---

const Formulaire = styled.form`
  width: 75vw;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  padding: 25px 0;
`

const DivInscription = styled.div`
  width: 100%;
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

const RegsiterForm = props => {
    const [data, setData] = useState({})
    const history = useHistory()

    const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value})
    }

    const handleClick = async event => {
        event.preventDefault()
        //On vérifie d'abord les 2 mots de passe
        if (data.password === data.passwordConfirm) {
            //On crée un objet sans le passwordConfirm
            const dataUser = {
                email: data.email,
                firstname: data.firstname,
                lastname: data.lastname,
                password: data.password
            }
            if(await props.actions.login.register(dataUser).query) window.location.reload()
        } else alert('Les mots de passe sont différents')

    }

    return (
        <DivInscription>
            <DivClose onClick={() => history.push('/home')}>
                <Image src={require("../assets/close.png")} width={20} height={20}/>
            </DivClose>
            <Form
                content={
                    <>
                        <div>
                            <LabelForm label="ADRESSE MAIL"/><RedStar/>
                            <InputForm type="text" name="email" onChange={handleChange}/><br/>
                            <LabelForm label="PRENOM"/><RedStar/>
                            <InputForm type="text" name="firstname" onChange={handleChange}/><br/>
                            <LabelForm label="NOM"/><RedStar/>
                            <InputForm type="text" name="lastname" onChange={handleChange}/><br/>
                            <LabelForm label="MOT DE PASSE"/><RedStar/>
                            <InputForm type="password" name="password" onChange={handleChange}/><br/>
                            <LabelForm label="CONFIRMATION"/><RedStar/>
                            <InputForm type="password" name="passwordConfirm" onChange={handleChange}/><br/>
                        </div>
                        <ButtonForm value="INSCRIPTION"/>
                    </>
                }
                onSubmit={handleClick}
            />
        </DivInscription>
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

export default connect(mapStateToProps, mapDispatchToProps)(RegsiterForm)
