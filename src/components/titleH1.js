import React from "react"
import styled from "styled-components"

const BigTitle = styled.h1`
  text-align: center;
  margin: 15px;
  color: ${props => localStorage.getItem('theme') === 'dark' ? props.theme.darkTheme.textColor : props.theme.lightTheme.textColor};
`

const TitleH1 = ({title = ""}) => {
    return <BigTitle>{title}</BigTitle>
}

export default TitleH1
