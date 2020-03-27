import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  border: 1px solid ${props => localStorage.getItem('theme') === 'dark' ? props.theme.darkTheme.borderGrey : props.theme.lightTheme.primary};
  background-color: ${props => localStorage.getItem('theme') === 'dark' ? props.theme.darkTheme.inputGrey : '#fff'};
  color: ${props => localStorage.getItem('theme') === 'dark' ? props.theme.darkTheme.textColor : props.theme.lightTheme.textColor};
  height: 35px;
  width: 100%;
  margin-bottom: 15px;
  outline: none;
  padding: 10px;
  box-sizing: border-box;
  font-family: 'Sen', sans-serif;
`


const InputForm = ({
    name = "",
    type = "text",
    onChange = null
}) => {
    return (
        <StyledInput type={type} name={name} onChange={onChange}/>
    )
}

export default InputForm
