import React from 'react'
import RecipeForm from "../components/recipeForm"
import NavBar from "../components/navbar"
import DivWhiteBoxShadow from "../components/divWhiteBoxShadow"
import TitleH1 from '../components/titleH1'
//---TRANSLATION
import {withTranslation} from 'react-i18next'
//

const CreateRecipe = ({t}) => {
    return (
        <>
            <NavBar/>
            <TitleH1 title={t('newRecipe.create')}/>
            <DivWhiteBoxShadow content={<RecipeForm/>}/>
        </>
    )
}

export default withTranslation()(CreateRecipe)
