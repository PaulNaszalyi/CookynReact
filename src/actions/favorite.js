import axios from "axios";
import ENV from "../config/env";

export const ADD_FAVORITE = 'ADD_FAVORITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
export const GET_FAVORITE = 'GET_FAVORITE'
export const GET_FAVORITE_BY_USER = 'GET_FAVORITE_BY_USER'

const dispatchFavorite = (type, payload) => ({type: type, payload: payload})

export const addFavorite = data => async dispatch => {
    return axios.post(`${ENV.API}/favoris`, data)
        .then(res => {
            if (res.data.errmsg) {
                alert(res.data.errmsg)
                dispatch(dispatchFavorite(ADD_FAVORITE, res.data))
                return false
            } else {
                dispatch(dispatchFavorite(ADD_FAVORITE, res.data))
                return true
            }
        })
        .catch(err => {
            alert(err)
        })
}

export const removeFavorite = data => async dispatch => {
    return axios.delete(`${ENV.API}/favoris`, {data: data})
        .then(res => {
            if (res.data.errmsg) {
                alert(res.data.errmsg)
                dispatch(dispatchFavorite(REMOVE_FAVORITE, res.data))
                return true
            } else {
                dispatch(dispatchFavorite(REMOVE_FAVORITE, res.data))
                return false
            }
        })
        .catch(err => {
            alert(err)
        })
}

export const getFavorite = data => dispatch => {
    return axios.post(`${ENV.API}/getfavoris`, data)
        .then(res => {
            if (res.data.errmsg) alert(res.data.errmsg)
            else {
                dispatch(dispatchFavorite(GET_FAVORITE, res.data.found))
                return res.data.found
            }
        })
        .catch(err => {
            alert(err)
        })
}

export const getFavoritesByUser = data => dispatch => {
    return axios.get(`${ENV.API}/getfavorisbyuser/${data}`)
        .then(res => {
            if (res.data.errmsg) alert(res.data.errmsg)
            else {
                dispatch(dispatchFavorite(GET_FAVORITE_BY_USER, res.data))
                return res.data
            }
        })
        .catch(err => {
            alert(err)
        })
}
