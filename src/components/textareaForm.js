import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.textarea`
  border: 1px solid ${props => localStorage.getItem('theme') === 'dark' ? props.theme.darkTheme.primary : props.theme.lightTheme.primary};
  width: 100%;
  margin-bottom: 15px;
  outline: none;
  padding: 10px;
  box-sizing: border-box;
  font-family: 'Sen', sans-serif;
`


const TextareaForm = ({
                          name = "",
                          onChange = null
                      }) => {
    return (
        <StyledInput name={name} onChange={onChange}/>
    )
}

export default TextareaForm
