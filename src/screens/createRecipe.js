import React from 'react'
import styled from 'styled-components'
import RecipeForm from "../components/recipeForm"
import NavBar from "../components/navbar"

const FormRecipe = styled.div`
  margin: 15px;
  margin-top: 70px;
  box-sizing: border-box;
  padding: 25px;
  padding-bottom: 45px;
  background-color: #fff;
  box-shadow: 0px 0px 5px 0px rgba(199,199,199,1);
`

const CreateRecipe = () => {
    return (
        <div>
            <NavBar/>
            <FormRecipe>
                <RecipeForm/>
            </FormRecipe>
        </div>
    )
}

export default CreateRecipe
