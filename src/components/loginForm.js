import React, {useState} from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import TitleH2 from './titleH2'
import LabelForm from "./labelForm"
import InputForm from "./inputForm"
import ButtonForm from "./buttonForm"
import RedStar from "./redStar"
import axios from 'axios'

const Formulaire = styled.form`
`

const DivForm = styled.div`
  width: 85%;
  max-width: 350px;
  margin: auto;
`

const LoginForm = () => {
    const [data, setData] = useState({})
    const history = useHistory()

    const handleChange = event => {
        setData({...data, [event.target.name]: event.target.value})
    }

    const handleClick = event => {
        event.preventDefault()

        axios.post('http://localhost:3000/api/auth/login', data)
            .then(res => {
                if (res.data.errmsg) alert(res.data.errmsg)
                else {
                    localStorage.setItem('email', res.data.email)
                    localStorage.setItem('idUser', res.data.idUser)
                    localStorage.setItem('firstname', res.data.firstname)
                    localStorage.setItem('lastname', res.data.lastname)
                    localStorage.setItem('token', res.data.token)

                    window.location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })

    }
    return (
        <DivForm>
            <TitleH2 title='LOGIN'/>
            <Formulaire onSubmit={handleClick}>
                <LabelForm label="Adresse mail"/><RedStar/><br/>
                <InputForm name="email" onChange={handleChange}/><br/>
                <LabelForm label="Mot de passe"/><RedStar/><br/>
                <InputForm type="password" name="password" onChange={handleChange}/><br/>
                <ButtonForm/>
            </Formulaire>
        </DivForm>
    )
}

export default LoginForm
