import axios from "axios";
import ENV from '../config/env'
export const GET_RECIPE = 'GET_RECIPE'
export const FETCH_RECIPE = 'FETCH_RECIPE'


export const getRecipe = data => ({
    type: GET_RECIPE,
    data
})

export const fetchRecipes = data => ({
    type: FETCH_RECIPE,
    data
})


export const callGetRecipe = (idRecipe) => async dispatch => {
    return await axios.get(`${ENV.API}/recette/${idRecipe}`)
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
            return err
        })
}


export const callFetchRecipes = (keyword) => dispatch => {
    return axios.get(`${ENV.API}/findRecettes/${keyword}`)
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
}


