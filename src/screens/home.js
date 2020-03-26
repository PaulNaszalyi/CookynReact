import React from "react"
import NavBar from "../components/navbar"
import GetRecipes from "../components/getRecipes"
import TitleH2 from "../components/titleH2"

const Home = () => {
    return (
        <div>
            <NavBar/>
            <TitleH2 title="Les dernières recettes" />
            <GetRecipes/>
        </div>
    )
}

export default Home
