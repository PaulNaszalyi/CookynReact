import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  width: 100%;
  height: 35px;
  background-color: ${props => localStorage.getItem('theme') === 'dark' ? props.theme.darkTheme.primary : props.theme.lightTheme.primary};
  border: 1px solid ${props => localStorage.getItem('theme') === 'dark' ? props.theme.darkTheme.primary : props.theme.lightTheme.primary};
  color: #fff;
  font-family: 'Sen', sans-serif;
  font-weight: bold;
  margin-top: 50px;
  transition: 0.3s;
  outline: none;
  text-transform: uppercase;
  
  :hover {
    background-color: transparent;
    color: ${props => localStorage.getItem('theme') === 'dark' ? props.theme.darkTheme.primary : props.theme.lightTheme.primary};
    cursor: pointer;
  }
`

const ButtonForm = ({
                        name = "send",
                        value = "ENVOYER"
                    }) => {
    return (
        <Button type="submit" name={name}>
            {value}
        </Button>
    )
}

export default ButtonForm
