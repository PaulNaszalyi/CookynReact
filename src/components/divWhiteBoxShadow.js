import React from 'react'
import styled from 'styled-components'

const DivDescription = styled.div`
  margin: 15px;
  box-sizing: border-box;
  padding: 25px;
  padding-bottom: 45px;
  color: ${props => localStorage.getItem('theme') === 'dark' ? props.theme.darkTheme.textColor : props.theme.lightTheme.textColor};
  background-color: ${props => localStorage.getItem('theme') === 'dark' ? props.theme.darkTheme.clearGrey : '#fff'};
  box-shadow: 0px 0px 5px 0px ${props => localStorage.getItem('theme') === 'dark' ? props.theme.darkTheme.borderGrey : props.theme.lightTheme.borderGrey};
`

const DivWhiteBoxShadow = ({content = ""}) => {
    return (
        <DivDescription>
            {content}
        </DivDescription>
    )
}

export default DivWhiteBoxShadow
