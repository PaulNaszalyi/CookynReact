import React from 'react'
import styled from 'styled-components'
import {useForm} from 'react-hook-form'

const StyledInput = styled.input`
  border: 1px solid #b21f66;
  height: 20px;
  border-radius: 5px;
  margin-bottom: 15px;
`

const Formulaire = styled.form`
`

const DivInscription = styled.div`
  width: 45%;
`

const RegsiterForm = () => {
    const {handleSubmit, register, errors} = useForm()

    const sendData = values => {
        fetch('http://localhost:3000/api/user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })

    }
    return (
        <DivInscription>
            <h2>INSCRIPTION</h2>
            <Formulaire onSubmit={handleSubmit(sendData)}>
                <label>Adresse mail</label><br/>
                <StyledInput type="text" name="email" ref={register}/><br/>
                <label>Prénom</label><br/>
                <StyledInput type="text" name="firstname" ref={register}/><br/>
                <label>Nom</label><br/>
                <StyledInput type="text" name="lastname" ref={register}/><br/>
                <label>Mot de passe</label><br/>
                <StyledInput type="text" name="password" ref={register}/><br/>
                <label>Confirmer le mot de passe</label><br/>
                <StyledInput type="text" name="passwordConfirm" ref={register}/><br/>
                <button type="submit" name="send">ENVOYER</button>
            </Formulaire>
        </DivInscription>
    )
}

export default RegsiterForm
