import React from "react"
import styled from "styled-components"

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: calc(89vh - 15px);
  box-sizing: border-box;
`

const Container = ({content = ""}) => {
    return <Div>{content}</Div>
}

export default Container
