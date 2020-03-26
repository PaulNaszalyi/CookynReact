import axios from "axios";
import ENV from '../config/env'
export const GET_RECIPE = 'GET_RECIPE'


export const getRecipe = data => ({
    type: GET_RECIPE,
    data
})


export const callGetRecipe = (idRecipe) => async dispatch => {
    return await axios.get(`${ENV.API}/recette/${idRecipe}`)
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
            return err
        })
}
