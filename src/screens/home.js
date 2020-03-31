import React, {useState} from "react"
import NavBar from "../components/navbar"
import GetRecipes from "../components/getRecipes"
import TitleH2 from "../components/titleH2"
import SearchBar from "../components/searchBar"
//---TRANSLATION
import {withTranslation} from 'react-i18next'
//

const Home = ({t}) => {

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
            <SearchBar onChange={handleChange} placeholder={t('home.searchBar')}/>
            {data === "*" ? <TitleH2 title={t('home.lastRecipes')}/> :
                <TitleH2 title={t('home.searchingRes')}/>}
            <GetRecipes keyword={data}/>
        </div>
    )
}

export default withTranslation()(Home)
