import {LOGIN, REGISTER} from '../actions/login'

const initialState = {
    login: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                login: action.data
            }
        case REGISTER:
            return {
                ...state,
                login: action.data
            }
        default:
            return state
    }
}
