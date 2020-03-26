import React, {useState} from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import Title from './titleH2'
import ButtonForm from "./buttonForm"
import RedStar from "./redStar"
import ENV from "../config/env"

const StyledInput = styled.input`
  border: 1px solid #b21f66;
  height: 35px;
  width: 100%;
  margin-bottom: 15px;
  outline: none;
  padding: 10px;
  box-sizing: border-box;
  font-family: 'Sen', sans-serif;
`

const Formulaire = styled.form`
`

const DivInscription = styled.div`
  width: 85%;
  max-width: 350px;
  margin: auto;
`

const LabelInput = styled.label`
  font-size: 90%;
`

const RegsiterForm = () => {
    const [data, setData] = useState({})
    const history = useHistory()

    const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value})
    }

    const handleClick = event => {
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
            axios.post(`${ENV.API}/user`, dataUser)
                .then(res => {
                    localStorage.setItem('email', res.data.email)
                    localStorage.setItem('firstname', res.data.firstname)
                    localStorage.setItem('lastname', res.data.lastname)
                    localStorage.setItem('token', res.data.token)

                    console.log(res)

                    history.push('/home')
                })
                .catch(err => {
                    console.log(err)
                })
        } else alert('Les mots de passe sont différents')

    }

    return (
        <DivInscription>
            <Title title={"INSCRIPTION"}/>
            <Formulaire onSubmit={handleClick}>
                <LabelInput>Adresse mail</LabelInput><RedStar/><br/>
                <StyledInput type="text" name="email" onChange={handleChange} required/><br/>
                <LabelInput>Prénom</LabelInput><RedStar/><br/>
                <StyledInput type="text" name="firstname" onChange={handleChange} required/><br/>
                <LabelInput>Nom</LabelInput><RedStar/><br/>
                <StyledInput type="text" name="lastname" onChange={handleChange} required/><br/>
                <LabelInput>Mot de passe</LabelInput><RedStar/><br/>
                <StyledInput type="password" name="password" onChange={handleChange} required/><br/>
                <LabelInput>Confirmer le mot de passe</LabelInput><RedStar/><br/>
                <StyledInput type="password" name="passwordConfirm" onChange={handleChange} required/><br/>
                <ButtonForm/>
            </Formulaire>
        </DivInscription>
    )
}

export default RegsiterForm
