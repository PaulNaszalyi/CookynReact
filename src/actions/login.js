import axios from "axios";
import ENV from "../config/env";

export const LOGIN = 'LOGIN'
export const REGISTER = 'REGISTER'


export const login = data => ({
    type: LOGIN,
    data
})

export const register = data => ({
    type: REGISTER,
    data
})


export const callLogin = (data) => dispatch => {
    return axios.post(`${ENV.API}/auth/login`, data)
        .then(res => {
            if (res.data.errmsg) {
                alert(res.data.errmsg)
                return false
            }
            else {
                localStorage.setItem('email', res.data.email)
                localStorage.setItem('idUser', res.data.idUser)
                localStorage.setItem('firstname', res.data.firstname)
                localStorage.setItem('lastname', res.data.lastname)
                localStorage.setItem('token', res.data.token)
                return true
            }
        })
        .catch(err => {
            console.log(err)
        })
}

export const callRegister = (dataUser) => dispatch => {
    return axios.post(`${ENV.API}/user`, dataUser)
        .then(res => {
            console.log(res)
            if (res.data.errmsg) {
                alert(res.data.errmsg)
                return false
            }
            else {
                localStorage.setItem('email', res.data.email)
                localStorage.setItem('firstname', res.data.firstname)
                localStorage.setItem('lastname', res.data.lastname)
                localStorage.setItem('token', res.data.token)
                return true
            }
        })
        .catch(err => {
            console.log(err)
        })
}
