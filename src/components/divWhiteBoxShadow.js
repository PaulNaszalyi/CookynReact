import React from 'react'
import styled from 'styled-components'

const DivDescription = styled.div`
  margin: 15px 0;
  box-sizing: border-box;
  padding: 25px;
  padding-bottom: 45px;
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.themeName === 'dark' ? 'transparent' : props.theme.backgroundColor};
  box-shadow: 0px 0px 5px 0px ${props => props.theme.themeName === 'dark' ? 'transparent' : props.theme.borderGrey};
  border: 1px solid ${props => props.theme.themeName === 'dark' ? '#444444' : 'transparent'};
`

const DivWhiteBoxShadow = ({content = ""}) => {
    return (
        <DivDescription>
            {content}
        </DivDescription>
    )
}

export default DivWhiteBoxShadow
