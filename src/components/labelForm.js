import React from 'react'
import styled from 'styled-components'

const StyledLabel = styled.label`
  font-size: 18px;
`


const LabelForm = ({label=""}) => {
    return (
        <StyledLabel>{label}</StyledLabel>
    )
}

export default LabelForm
