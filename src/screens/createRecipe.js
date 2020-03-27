import React from 'react'
import RecipeForm from "../components/recipeForm"
import NavBar from "../components/navbar"
import DivWhiteBoxShadow from "../components/divWhiteBoxShadow"
import TitleH1 from '../components/titleH1'
import styled from "styled-components"

const DivContainer = styled.div`
  margin-bottom: 50px;
`

const CreateRecipe = () => {
    return (
        <DivContainer>
            <NavBar/>
            <TitleH1 title="Créer une nouvelle recette" />
            <DivWhiteBoxShadow content={<RecipeForm/>} />
        </DivContainer>
    )
}

export default CreateRecipe
