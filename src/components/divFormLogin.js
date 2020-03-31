import React from "react"
import styled from "styled-components"

const DivForm = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  color: #323232;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.85);
`

const DivFormLogin = ({content = ""}) => {
    return <DivForm>{content}</DivForm>
}

export default DivFormLogin
