import {FETCH_RECIPE, GET_RECIPE} from '../actions/recipe'

const initialState = {
    recipe: {}
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
        default:
            return state
    }
}
