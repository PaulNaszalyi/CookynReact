import axios from "axios";
import ENV from "../config/env";

export const ADD_FAVORITE = 'ADD_FAVORITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
export const GET_FAVORITE = 'GET_FAVORITE'
export const GET_FAVORITE_BY_USER = 'GET_FAVORITE_BY_USER'


export const addFavorite = data => async dispatch => {
    const query = axios.post(`${ENV.API}/favoris`, data)
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
        data,
        query
    }
}

export const removeFavorite = data => async dispatch => {
    const query = axios.delete(`${ENV.API}/favoris`, {data: data})
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
        data,
        query
    }
}

export const getFavorite = data => dispatch => {
    const query = axios.post(`${ENV.API}/getfavoris`, data)
        .then(res => {
            if (res.data.errmsg) alert(res.data.errmsg)
            else return res.data.found
        })
        .catch(err => {
            alert(err)
        })
    return {
        type: GET_FAVORITE,
        data,
        query
    }
}

export const getFavoritesByUser = data => dispatch => {
    const query = axios.get(`${ENV.API}/getfavorisbyuser/${data}`)
        .then(res => {
            if (res.data.errmsg) alert(res.data.errmsg)
            else return res.data
        })
        .catch(err => {
            alert(err)
        })
    return {
        type: GET_FAVORITE_BY_USER,
        data,
        query
    }
}
