const initialState = {
    language: 'fr'
};

const LanguageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SWITCH_LANGUAGE":
            return {language: action.payload}
        default:
            return state
    }
};

export default LanguageReducer
