import React, {useState} from "react"
import NavBar from "../components/navbar"
import GetRecipes from "../components/getRecipes"
import styled from "styled-components"
import axios from 'axios'
import SearchBar from "../components/searchBar"

const LastRecipes = styled.h2`
  margin: 15px;
  font-size: 20px;
  border-bottom: 1px solid #b21f66;
`

const Home = () => {

    const [data, setData] = useState({})

    const handleChange = async event => {
        setData({ ...data, [event.target.name]: event.target.value })
        //console.log(data)
        
        //event.preventDefault()

        console.log(data.searchBar)
    }


    return (
        <div>
            <NavBar/>
            <SearchBar onChange = {handleChange}/>
            <LastRecipes>Les dernières recettes</LastRecipes>
            <GetRecipes keyword = {data.searchBar}/>
        </div>
    )
}

export default Home
