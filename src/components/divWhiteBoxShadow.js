import React from 'react'
import styled from 'styled-components'

const DivDescription = styled.div`
  margin: 15px;
  box-sizing: border-box;
  padding: 25px;
  padding-bottom: 45px;
  background-color: ${props => localStorage.getItem('theme') === 'dark' ? props.theme.darkTheme.grey : '#fff'};
  box-shadow: 0px 0px 5px 0px rgba(199,199,199,1);
`

const DivWhiteBoxShadow = ({content = ""}) => {
    return (
        <DivDescription>
            {content}
        </DivDescription>
    )
}

export default DivWhiteBoxShadow
