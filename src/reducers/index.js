import { combineReducers } from 'redux'

import favorite from './favorite'
import recipe from './recipe'
import login from './login'
import theme from './theme'
import language from './language'

export default combineReducers({favorite, recipe, login, theme, language})
