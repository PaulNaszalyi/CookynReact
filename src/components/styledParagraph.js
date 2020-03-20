import React from "react"
import styled from "styled-components"

const Styled = styled.p`
  margin: 0;
  margin-top: ${props => props.marginTop};
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
    return <Styled>
        {content}
    </Styled>
}

export default StyledParagraph
