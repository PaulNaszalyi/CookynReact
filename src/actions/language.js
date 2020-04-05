export const SWITCH_LANGUAGE = 'SWITCH_LANGUAGE'

const dispatchLanguage = (type, payload) => ({type: type, payload: payload})

export const switchLanguage = language => dispatch => {
    dispatch(dispatchLanguage(SWITCH_LANGUAGE, language))
}
