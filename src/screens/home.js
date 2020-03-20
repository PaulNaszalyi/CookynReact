import React from "react"
import NavBar from "../components/navbar"
import GetRecipes from "../components/getRecipes"
import styled from "styled-components"

const LastRecipes = styled.h2`
  margin: 15px;
  font-size: 20px;
  border-bottom: 1px solid #b21f66;
`

const Home = () => {
    return (
        <div>
            <NavBar/>
            <LastRecipes>Les dernières recettes</LastRecipes>
            <GetRecipes/>
        </div>
    )
}

export default Home
