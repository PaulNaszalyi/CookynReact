import React from 'react'
import styled from 'styled-components'
import Image from "../components/image.js"
import {useHistory} from 'react-router-dom'

const StyledNavBar = styled.div`
    position: fixed;
    width: 100%;
    height: 60px;
    background-color: #b21f66;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    box-sizing: border-box;
`

const NavBar = () => {
    const history = useHistory()

    return (
        <StyledNavBar>
            <Image src={require("../assets/back.png")} width={40} height={40} onClick={() => window.history.back()}/>
            <Image src={require("../assets/home.png")} width={40} height={40} onClick={() => history.push('/home')}/>
            <Image src={require("../assets/plus.png")} width={40} height={40} onClick={() => history.push('/create-recipe')}/>
            <Image src={require("../assets/heart.png")} width={40} height={40} onClick={() => history.push('/favorites')}/>
        </StyledNavBar>
    )
}

export default NavBar
