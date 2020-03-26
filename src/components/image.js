import React from 'react'
import styled from 'styled-components'

const Icon = styled.img`
  cursor: pointer;
  padding: ${prop => prop.margin};
`

const Image = ({src = "", width = "50", height = "50", onClick = null, margin = "0"}) => {
    return (
        <Icon src={src} alt="Loading Error" width={`${width}`} height={`${height}`} margin={`${margin}`} onClick={onClick}/>
    )
}

export default Image
