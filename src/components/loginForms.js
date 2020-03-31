import React from "react"
import styled from 'styled-components'

const Formulaire = styled.form`
  width: 75vw;
  height: ${props => props.register ? '70vh' : '50vh'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  padding: 25px 0;
`

const Form = ({content = "", onSubmit = null, register = false}) => {
    return <Formulaire onSubmit={onSubmit} register={register}>{content}</Formulaire>
}

export default Form
