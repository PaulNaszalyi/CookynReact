import React from "react"
import styled from "styled-components"

const Styled = styled.p`
  margin-top: ${props => props.marginTop}; 
  margin-right: ${props => props.marginRight}; 
  margin-bottom: ${props => props.marginBottom}; 
  margin-left: ${props => props.marginLeft};
  text-align: justify;
  width: 100%;
`

const StyledParagraph = ({
                             content = "",
                             marginTop = 0,
                             marginRight = 0,
                             marginBottom = 0,
                             marginLeft = 0
                         }) => {
    return <Styled marginTop={marginTop} marginRight={marginRight} marginBottom={marginBottom} marginLeft={marginLeft}>
        {content}
    </Styled>
}

export default StyledParagraph
