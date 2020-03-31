import {ADD_FAVORITE, GET_FAVORITE, GET_FAVORITE_BY_USER, REMOVE_FAVORITE} from '../actions/favorite'

const initialState = {
    favorite: []
}


export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                favorite: [{...state}, action.payload]
            }
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorite: [{...state}, action.payload]
            }
        case GET_FAVORITE:
            return {
                ...state,
                favorite: [{...state}, action.payload]
            }
        case GET_FAVORITE_BY_USER:
            return {
                ...state,
                favorite: [{...state}, action.payload]
            }
        default:
            return state
    }
}
