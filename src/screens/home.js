import React, {useState} from "react"
import NavBar from "../components/navbar"
import GetRecipes from "../components/getRecipes"
import TitleH2 from "../components/titleH2"
import SearchBar from "../components/searchBar"

const Home = () => {

    const [data, setData] = useState("*")

    const handleChange = async event => {
        if (event.target.value !== "")
            setData(event.target.value)
        else
            setData("*")
    }

    return (
        <div>
            <NavBar/>
            <SearchBar onChange={handleChange} />
            {data === "*" ? <TitleH2 title="Les dernières recettes" /> : <TitleH2 title="Résultat de votre recherche :" />}
            <GetRecipes keyword={data}/>
        </div>
    )
}

export default Home
