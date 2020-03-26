import { combineReducers } from 'redux'

import favorite from './favorite'
import recipe from './recipe'

export default combineReducers({
  favorite,
  recipe
})
