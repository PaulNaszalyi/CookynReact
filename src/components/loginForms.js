import React from "react"
import styled from 'styled-components'

const Formulaire = styled.form`
  width: 75vw;
  height: ${props => props.height};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  padding: 25px 0;
`

const Form = ({content = "", onSubmit = null, height = "50vh"}) => {
    return <Formulaire onSubmit={onSubmit}>{content}</Formulaire>
}

export default Form
