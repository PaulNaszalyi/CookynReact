import {GET_RECIPE, FETCH_RECIPE, FETCH_RECIPES_FAVS, CREATE_RECIPE, POST_PHOTO} from '../actions/recipe'

const initialState = {
    recipe: []
}


export default (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPE:
            return {
                ...state,
                recipe: action.data
            }
        case FETCH_RECIPE:
            return {
                ...state,
                recipe: action.data
            }
        case FETCH_RECIPES_FAVS:
            return {
                ...state,
                recipe: action.data
            }
        case CREATE_RECIPE:
            return {
                ...state,
                recipe: action.data
            }
        case POST_PHOTO:
            return {
                ...state,
                recipe: action.data
            }
        default:
            return state
    }
}
