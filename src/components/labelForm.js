import React from 'react'
import styled from 'styled-components'

const StyledLabel = styled.label`
  font-weight: bold;
`


const LabelForm = ({label=""}) => {
    return (
        <StyledLabel>{label}</StyledLabel>
    )
}

export default LabelForm
