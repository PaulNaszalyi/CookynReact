import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  padding: 15px;
  margin-top: 15px;
`

const StyledInput = styled.input`
  border: 1px solid #b21f66;
  height: 35px;
  width: 100%;
  outline: none;
  padding: 10px;
  box-sizing: border-box;
  font-family: 'Sen', sans-serif;
`

const SearchBar = ({
    onChange = null
}) => {
    return <StyledDiv><StyledInput type='text' name='searchBar' onChange={onChange}/></StyledDiv>
}

export default SearchBar
