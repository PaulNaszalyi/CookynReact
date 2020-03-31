import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  margin-top: 15px;
  margin-bottom: 25px;
`

const StyledInput = styled.input`
  border: 1px solid ${props => localStorage.getItem('theme') === 'dark' ? props.theme.darkTheme.borderGrey : props.theme.lightTheme.primary};
  background-color: ${props => localStorage.getItem('theme') === 'dark' ? props.theme.darkTheme.inputGrey : '#fff'};
  color: ${props => localStorage.getItem('theme') === 'dark' ? props.theme.darkTheme.textColor : props.theme.lightTheme.textColor};
  height: 35px;
  width: 100%;
  outline: none;
  padding: 10px;
  box-sizing: border-box;
  font-family: 'Sen', sans-serif;
  
  ::placeholder {
    color: ${props => localStorage.getItem('theme') === 'dark' ? props.theme.darkTheme.textColor : props.theme.lightTheme.textColor};
  }
`

const SearchBar = ({
                       onChange = null,
                       placeholder = ""
                   }) => {
    return (
        <StyledDiv>
            <StyledInput type='text' name='searchBar' onChange={onChange} placeholder={placeholder}/>
        </StyledDiv>
    )
}

export default SearchBar
