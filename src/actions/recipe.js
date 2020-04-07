import axios from "axios";
import ENV from '../config/env'

export const GET_RECIPE = 'GET_RECIPE'
export const FETCH_RECIPE = 'FETCH_RECIPE'
export const FETCH_RECIPES_FAVS = 'FETCH_RECIPES_FAVS'
export const CREATE_RECIPE = 'CREATE_RECIPE'
export const POST_PHOTO = 'POST_PHOTO'

const dispatchRecipe = (type, payload) => ({type: type, payload: payload})

export const getRecipe = data => dispatch => {
    return axios.get(`${ENV.API}/recette/${data}`)
        .then(res => {
            dispatch(dispatchRecipe(GET_RECIPE, res.data))
            return res.data
        })
        .catch(err => {
            console.log(err)
            return err
        })
}

export const fetchRecipes = data => dispatch => {
    return axios.get(`${ENV.API}/findRecettes/${data}`)
        .then(res => {
            dispatch(dispatchRecipe(FETCH_RECIPE, res.data))
            return res.data
        })
        .catch(err => {
            return err
        })
}

export const fetchRecipesByFavs = data => dispatch => {
    return axios.post(`${ENV.API}/findRecettes/`, {recipes: data})
        .then(res => {
            if (res.data.errmsg) alert(res.data.errmsg)
            else {
                dispatch(dispatchRecipe(FETCH_RECIPES_FAVS, res.data))
                return res.data
            }
        })
        .catch(err => {
            return err
        })
}

export const createRecipe = data => dispatch => {
    return axios.post(`${ENV.API}/recette`, data)
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

export const postPhoto = file => dispatch => {
    return axios.post(`${ENV.API}/photo`, file)
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
