import axios from "axios";
import ENV from "../config/env";

export const LOGIN = 'LOGIN'
export const REGISTER = 'REGISTER'


export const login = data => dispatch => {
    const query = axios.post(`${ENV.API}/auth/login`, data)
        .then(res => {
            if (res.data.errmsg) {
                alert(res.data.errmsg)
                return false
            } else {
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
    return {
        type: LOGIN,
        data,
        query
    }

}

export const register = data => dispatch => {
    const query = axios.post(`${ENV.API}/user`, data)
        .then(res => {
            if (res.data.errmsg) {
                alert(res.data.errmsg)
                return false
            } else {
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
    return {
        type: REGISTER,
        data,
        query
    }
}
