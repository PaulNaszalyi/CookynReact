import React from 'react'
import styled from 'styled-components'
//import image from '../assets/plus.png'

const Icon = styled.img`
  cursor: pointer;
`

const Image = ({
                   src = "",
                   width = "50",
                   height = "50",
                   onClick = null
               }) => {

    return (
        <Icon src={src} alt="Loading Error" width={`${width}`} height={`${height}`} onClick={onClick}/>
    )
}

export default Image
