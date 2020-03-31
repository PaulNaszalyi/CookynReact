import axios from "axios";
import ENV from "../config/env";

export const ADD_FAVORITE = 'ADD_FAVORITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
export const GET_FAVORITE = 'GET_FAVORITE'
export const GET_FAVORITE_BY_USER = 'GET_FAVORITE_BY_USER'


export const addFavorite = data => async dispatch => {
    const payload = axios.post(`${ENV.API}/favoris`, data)
        .then(res => {
            if (res.data.errmsg) {
                alert(res.data.errmsg)
                return false
            } else return true
        })
        .catch(err => {
            alert(err)
        })
    return {
        type: ADD_FAVORITE,
        payload
    }
}

export const removeFavorite = data => async dispatch => {
    const payload = axios.delete(`${ENV.API}/favoris`, {data: data})
        .then(res => {
            if (res.data.errmsg) {
                alert(res.data.errmsg)
                return true
            } else return false
        })
        .catch(err => {
            alert(err)
        })

    return {
        type: REMOVE_FAVORITE,
        payload
    }
}

export const getFavorite = data => dispatch => {
    const payload = axios.post(`${ENV.API}/getfavoris`, data)
        .then(res => {
            if (res.data.errmsg) alert(res.data.errmsg)
            else return res.data.found
        })
        .catch(err => {
            alert(err)
        })
    return {
        type: GET_FAVORITE,
        payload
    }
}

export const getFavoritesByUser = data => dispatch => {
    const payload = axios.get(`${ENV.API}/getfavorisbyuser/${data}`)
        .then(res => {
            if (res.data.errmsg) alert(res.data.errmsg)
            else return res.data
        })
        .catch(err => {
            alert(err)
        })
    return {
        type: GET_FAVORITE_BY_USER,
        payload
    }
}
