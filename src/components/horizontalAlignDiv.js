import React from 'react'
import styled from 'styled-components'

const HorizontalAlign = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.textColor};
  font-weight: bold;
  width: 250px;
`

const HorizontalAlignDiv = ({content = ""}) => {
    return <HorizontalAlign>{content}</HorizontalAlign>
}

export default HorizontalAlignDiv
