import React, {useState} from "react"
import NavBar from "../components/navbar"
import GetRecipes from "../components/getRecipes"
import TitleH2 from "../components/titleH2"
import SearchBar from "../components/searchBar"

const Home = () => {

    const [data, setData] = useState("*")

    const handleChange = async event => {
        setData(event.target.value)
    }

    return (
        <div>
            <NavBar/>
            <SearchBar onChange={handleChange} />
            <TitleH2 title="Les dernières recettes" />
            <GetRecipes keyword={data}/>
        </div>
    )
}

export default Home
