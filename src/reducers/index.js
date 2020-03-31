import { combineReducers } from 'redux'

import favorite from './favorite'
import recipe from './recipe'
import login from './login'

export default combineReducers({favorite, recipe, login})
