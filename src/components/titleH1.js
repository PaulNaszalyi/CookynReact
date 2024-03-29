import React from "react"
import styled from "styled-components"

const BigTitle = styled.h1`
  text-align: center;
  margin: 15px 0;
  margin-bottom: 20px;
  color: ${props => props.theme.textColor};
`

const TitleH1 = ({title = ""}) => {
    return <BigTitle>{title}</BigTitle>
}

export default TitleH1
