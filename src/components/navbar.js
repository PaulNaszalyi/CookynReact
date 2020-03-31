import React from 'react'
import styled from 'styled-components'
import Image from "../components/image.js"
import {useHistory} from 'react-router-dom'

const StyledNavBar = styled.div`
    position: fixed;
    width: 100%;
    height: 9vh;
    background-color: ${props => localStorage.getItem('theme') === 'dark' ? props.theme.darkTheme.primary : props.theme.lightTheme.primary};
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
            <div>
                <Image src={require("../assets/back.png")} width={30} height={30}
                       margin={"10px"}
                       onClick={() => window.history.back()}/>
                <Image src={require("../assets/plus.png")} width={30} height={30}
                       margin={"10px"}
                       onClick={() => history.push('/create-recipe')}/>
            </div>
            <Image src={require("../assets/logoWhite.png")} width={"auto"} height={"55px"}
                   onClick={() => history.push('/home')}/>
            <div>

                <Image src={require("../assets/heart.png")} width={30} height={30}
                       margin={"10px"}
                       onClick={() => history.push('/favorites')}/>
                <Image src={require("../assets/settings.png")} width={30} height={30}
                       margin={"10px"}
                       onClick={() => history.push('/settings')}/>
            </div>
        </StyledNavBar>
    )
}

export default NavBar
