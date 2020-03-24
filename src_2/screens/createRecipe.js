import React from 'react'
import RecipeForm from "../components/recipeForm"
import NavBar from "../components/navbar"
import DivWhiteBoxShadow from "../components/divWhiteBoxShadow"
import TitleH1 from '../components/titleH1'

const CreateRecipe = () => {
    return (
        <div>
            <NavBar/>
            <TitleH1 title="Créer une nouvelle recette" />
            <DivWhiteBoxShadow content={<RecipeForm/>} />
        </div>
    )
}

export default CreateRecipe
