import axios from "axios";

export const ADD_FAVORITE = 'ADD_FAVORITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
export const GET_FAVORITE = 'GET_FAVORITE'
export const GET_FAVORITE_BY_USER = 'GET_FAVORITE_BY_USER'


export const addFavorite = data => ({
    type: ADD_FAVORITE,
    data
})

export const removeFavorite = data => ({
    type: REMOVE_FAVORITE,
    data
})

export const getFavorite = data => ({
    type: GET_FAVORITE,
    data
})

export const getFavoritesByUser = data => ({
    type: GET_FAVORITE_BY_USER,
    data
})


export const callPostFavorite = (data) => dispatch => {
    return axios.post(`http://localhost:3000/api/favoris`, data)
        .then(res => {
            if (res.data.errmsg) {
                alert(res.data.errmsg)
                return false
            }
            else return true
        })
        .catch(err => {
            alert(err)
        })
}

export const callDeleteFavorite = (data) => dispatch => {
    return axios.delete(`http://localhost:3000/api/favoris`, {data: data})
        .then(res => {
            if (res.data.errmsg) {
                alert(res.data.errmsg)
                return true
            }
            else return false
        })
        .catch(err => {
            alert(err)
        })
}

export const callGetFavorite = (data) => dispatch => {
    return axios.post(`http://localhost:3000/api/getfavoris`, data)
        .then(res => {
            if (res.data.errmsg) alert(res.data.errmsg)
            else return res.data.found
        })
        .catch(err => {
            alert(err)
        })
}

export const callGetFavoritesByUser = (data) => dispatch => {
    return axios.get(`http://localhost:3000/api/getfavorisbyuser/${data}`)
        .then(res => {
            if (res.data.errmsg) alert(res.data.errmsg)
            else return res.data
        })
        .catch(err => {
            alert(err)
        })
}
