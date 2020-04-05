export const SWITCH_THEME = 'SWITCH_THEME'

const dispatchTheme = (type, payload) => ({type: type, payload: payload})

export const switchTheme = theme => dispatch => {
    dispatch(dispatchTheme(SWITCH_THEME, theme))
}
