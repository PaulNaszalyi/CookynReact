import React, {useState} from "react"
import NavBar from "../components/navbar"
import GetRecipes from "../components/getRecipes"
import TitleH2 from "../components/titleH2"
import SearchBar from "../components/searchBar"
import styled from "styled-components"

const SwitchTheme = styled.div`
  color: ${props => localStorage.getItem('theme') === 'dark' ? props.theme.darkTheme.textColor : props.theme.lightTheme.textColor};
  text-align: center;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 15px;
`

const Home = () => {

    const [data, setData] = useState("*")

    const handleChange = async event => {
        setData(event.target.value)
    }

    return (
        <div>
            <NavBar/>
            <SearchBar onChange={handleChange}/>
            <TitleH2 title="Les dernières recettes"/>
            <GetRecipes keyword={data}/>

            {
                localStorage.getItem('theme') === 'dark' ?
                    <SwitchTheme>
                        <span onClick={() => {
                            localStorage.setItem('theme', 'light')
                            window.location.reload()
                        }}>LIGHT MODE</span>
                    </SwitchTheme> :
                    <SwitchTheme>
                        <span onClick={() => {
                            localStorage.setItem('theme', 'dark')
                            window.location.reload()
                        }}>DARK MODE</span>
                    </SwitchTheme>
            }


        </div>
    )
}

export default Home
