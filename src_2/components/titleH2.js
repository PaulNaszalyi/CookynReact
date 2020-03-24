import React from 'react'
import styled from 'styled-components'

const StyledH2 = styled.h2`
  margin: 35px 0;
`

const TitleH2 = ({
    title = ""
}) => {
    return <StyledH2>{title}</StyledH2>
}

export default TitleH2
