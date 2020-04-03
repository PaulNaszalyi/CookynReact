import axios from "axios";
import ENV from "../config/env";

export const LOGIN = 'LOGIN'
export const REGISTER = 'REGISTER'

const dispatchLogin = (type, payload) => ({type: type, payload: payload})

export const login = data => dispatch => {
    return axios.post(`${ENV.API}/auth/login`, data)
        .then(res => {
            if (res.data.errmsg) {
                alert(res.data.errmsg)
                dispatch(dispatchLogin(LOGIN, false))
                return false
            } else {
                localStorage.setItem('email', res.data.email)
                localStorage.setItem('idUser', res.data.idUser)
                localStorage.setItem('firstname', res.data.firstname)
                localStorage.setItem('lastname', res.data.lastname)
                localStorage.setItem('token', res.data.token)
                dispatch(dispatchLogin(LOGIN, res.data))
                return true
            }
        })
        .catch(err => {
            console.log(err)
        })
}

export const register = data => dispatch => {
    return axios.post(`${ENV.API}/user`, data)
        .then(res => {
            if (res.data.errmsg) {
                alert(res.data.errmsg)
                dispatch(dispatchLogin(REGISTER, false))
                return false
            } else {
                localStorage.setItem('email', res.data.email)
                localStorage.setItem('firstname', res.data.firstname)
                localStorage.setItem('lastname', res.data.lastname)
                localStorage.setItem('token', res.data.token)
                dispatch(dispatchLogin(REGISTER, res.data))
                return true
            }
        })
        .catch(err => {
            console.log(err)
        })
}
