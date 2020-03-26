import React from 'react'
import styled from 'styled-components'

const StyledH2 = styled.h2`
  margin: 15px;
  font-size: 20px;
  border-bottom: 1px solid #b21f66;
`

const TitleH2 = ({
    title = ""
}) => {
    return <StyledH2>{title}</StyledH2>
}

export default TitleH2
