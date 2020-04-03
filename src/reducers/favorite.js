import {ADD_FAVORITE, GET_FAVORITE, GET_FAVORITE_BY_USER, REMOVE_FAVORITE} from '../actions/favorite'

const initialState = {
    favorite: null
}


export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            state.favorite.push(action.payload)
            return { favorite: state.favorite }
        case REMOVE_FAVORITE:
            return { favorite: state.favorite.filter(recipe => recipe !== action.payload) }
        case GET_FAVORITE:
            return state
        case GET_FAVORITE_BY_USER:
            return { favorite: action.payload }
        default:
            return state
    }
}
