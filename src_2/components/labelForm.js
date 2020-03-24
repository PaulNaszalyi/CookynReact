import React from 'react'
import styled from 'styled-components'

const StyledLabel = styled.label`
`


const LabelForm = ({label=""}) => {
    return (
        <StyledLabel>{label}</StyledLabel>
    )
}

export default LabelForm