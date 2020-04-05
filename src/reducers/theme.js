import { lightTheme } from "../config/theme"

const initialState = {
    theme: { ...lightTheme }
};

const ThemeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SWITCH_THEME":
            return {theme: action.payload}
        default:
            return state
    }
};

export default ThemeReducer
