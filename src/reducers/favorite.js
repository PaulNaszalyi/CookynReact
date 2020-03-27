import {ADD_FAVORITE, GET_FAVORITE, GET_FAVORITE_BY_USER, REMOVE_FAVORITE} from '../actions/favorite'

const initialState = {
    favorite: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                favorite: [{...state}, action.data]
            }
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorite: [{...state}, action.data]
            }
        case GET_FAVORITE:
            return {
                ...state,
                favorite: [{...state}, action.data]
            }
        case GET_FAVORITE_BY_USER:
            alert(action.payload)
            return {
                ...state,
                favorite: [{...state}, action.data]
            }
        default:
            return state
    }
}
