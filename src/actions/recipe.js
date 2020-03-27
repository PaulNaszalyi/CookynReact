import axios from "axios";
import ENV from '../config/env'

export const GET_RECIPE = 'GET_RECIPE'
export const FETCH_RECIPE = 'FETCH_RECIPE'
export const FETCH_RECIPES_FAVS = 'FETCH_RECIPES_FAVS'
export const CREATE_RECIPE = 'CREATE_RECIPE'


export const getRecipe = data => ({
    type: GET_RECIPE,
    data
})

export const fetchRecipes = data => ({
    type: FETCH_RECIPE,
    data
})

export const fetchRecipesByFavs = data => ({
    type: FETCH_RECIPES_FAVS,
    data
})

export const createRecipe = data => ({
    type: CREATE_RECIPE,
    data
})

export const callCreateRecipe = data => async dispatch => {
    await axios.post(`${ENV.API}/recette`, data)
        .then(res => {
            if (res.data.errmsg) {
                alert(res.data.errmsg)
                return 0
            } else return 1
        })
        .catch(err => {
            console.log(err)
        })
}


export const postPhoto = file => async dispatch => {
    await axios.post(`${ENV.API}/photo`, file)
        .then(res => {
            if (res.data.errmsg) {
                alert(res.data.errmsg)
                return 0
            } else return 1
        })
        .catch(err => {
            console.log(err)
        })
}


export const callGetRecipe = idRecipe => async dispatch => {
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


export const callFetchRecipesByFavorites = (recipes) => dispatch => {
    return axios.post(`${ENV.API}/findRecettes/`, {recipes: recipes})
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
}


