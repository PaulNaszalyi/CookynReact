import React from "react"
import styled from 'styled-components'

const DivClose = styled.div`
  background-color: ${props => props.theme.primary};
  box-shadow: 0px 0px 5px 0px rgba(138,29,82,1);
  border-radius: 100px;
  margin-top: 20px;
  padding: 18px 20px;
`

const ClosePopup = ({content = "", onClick = null}) => {
    return <DivClose onClick={onClick}>{content}</DivClose>
}

export default ClosePopup
