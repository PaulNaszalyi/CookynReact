import axios from "axios";
import ENV from '../config/env'

export const GET_RECIPE = 'GET_RECIPE'
export const FETCH_RECIPE = 'FETCH_RECIPE'
export const FETCH_RECIPES_FAVS = 'FETCH_RECIPES_FAVS'
export const CREATE_RECIPE = 'CREATE_RECIPE'
export const POST_PHOTO = 'POST_PHOTO'


export const getRecipe = data => dispatch => {
    const query = axios.get(`${ENV.API}/recette/${data}`)
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
            return err
        })
    return {
        type: GET_RECIPE,
        data,
        query
    }
}

export const fetchRecipes = data => dispatch => {
    const query = axios.get(`${ENV.API}/findRecettes/${data}`)
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
    return {
        type: FETCH_RECIPE,
        data,
        query
    }
}

export const fetchRecipesByFavs = data => dispatch => {
    const query = axios.post(`${ENV.API}/findRecettes/`, {recipes: data})
        .then(res => {
            if (res.data.errmsg) alert(res.data.errmsg)
            else {
                return res.data
            }
        })
        .catch(err => {
            return err
        })
    return {
        type: FETCH_RECIPES_FAVS,
        data,
        query
    }
}

export const createRecipe = data => dispatch => {
    const query = axios.post(`${ENV.API}/recette`, data)
        .then(res => {
            if (res.data.errmsg) {
                alert(res.data.errmsg)
                return 0
            } else return 1
        })
        .catch(err => {
            console.log(err)
        })
    return {
        type: CREATE_RECIPE,
        data,
        query
    }
}

export const postPhoto = file => dispatch => {
    const query = axios.post(`${ENV.API}/photo`, file)
        .then(res => {
            if (res.data.errmsg) {
                alert(res.data.errmsg)
                return 0
            } else return 1
        })
        .catch(err => {
            console.log(err)
        })
    return {
        type: POST_PHOTO,
        file,
        query
    }
}
