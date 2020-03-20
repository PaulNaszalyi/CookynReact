import React from 'react'
import styled from 'styled-components'

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

const SearchBar = ({
    onChange = null
}) => {

    return (
        <StyledInput type='text' name='searchBar' onChange={onChange}/>
    )
}

export default SearchBar
