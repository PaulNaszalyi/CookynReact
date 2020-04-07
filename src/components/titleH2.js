import React from 'react'
import styled from 'styled-components'

const StyledH2 = styled.h2`
  margin: 15px 0;
  font-size: 20px;
  border-bottom: 1px solid ${props => props.theme.primary};
  color: ${props => props.theme.textColor};
  letter-spacing: 1px;
`

const TitleH2 = ({
    title = ""
}) => {
    return <StyledH2>{title}</StyledH2>
}

export default TitleH2
