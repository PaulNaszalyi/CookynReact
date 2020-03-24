import React from 'react'
import styled from "styled-components"

const Text = styled.h2`
 color: silver;
 font-size: 30px;
 margin: 50px;
 text-align: center;
`

const BigText = ({content = ""}) => {
    return <Text>{content}</Text>
}

export default BigText
