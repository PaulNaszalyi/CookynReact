import React from 'react'
import styled from 'styled-components'
import Image from "../components/image.js"

const StyledNavBar = styled.div`
    position: fixed;
    width: 100%;
    height: 50;
    background-color: #b21f66;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
`

const ButtonWrapper = styled.div`
    margin: auto;
`

const NavBar = () => {

    return (
        <StyledNavBar>
            <ButtonWrapper>
                <a href="/home">
                    <Image src={require("../assets/house.png")} width="40" height="40"/>
                </a>
            </ButtonWrapper>
            <ButtonWrapper>
                <a href="/create-recipe">
                    <Image src={require("../assets/plus.png")}/>
                </a>
            </ButtonWrapper>
            <ButtonWrapper>
                <a href="/favorite">
                    <Image src={require("../assets/heart.png")}/>
                </a>
            </ButtonWrapper>
        </StyledNavBar>
    )
}

export default NavBar
