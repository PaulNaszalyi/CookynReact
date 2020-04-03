import {LOGIN, REGISTER} from '../actions/login'

const initialState = {
    login: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                login: action.payload
            }
        case REGISTER:
            return {
                ...state,
                login: action.payload
            }
        default:
            return state
    }
}
