import {GET_RECIPE, FETCH_RECIPE, FETCH_RECIPES_FAVS, CREATE_RECIPE, POST_PHOTO} from '../actions/recipe'

const initialState = {
    recipe: [],
    recipes: [],
    recipesFav: []
}


export default (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPE:
            return {...state, recipe: action.payload}
        case FETCH_RECIPE:
            return {...state, recipes: action.payload}
        case FETCH_RECIPES_FAVS:
            return {...state, recipesFav: action.payload}
        case CREATE_RECIPE:
            return state
        case POST_PHOTO:
            return state
        default:
            return state
    }
}
