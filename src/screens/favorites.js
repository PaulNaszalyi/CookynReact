import React, {useEffect, useState} from "react"
import NavBar from "../components/navbar"
import ItemListRecipe from "../components/itemListRecipe"
//---REDUX
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import allTheActions from '../actions'
import TitleH2 from "../components/titleH2";
//---

const Favorites = props => {
    const [favorites, setFavorites] = useState([])
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        const fetchFavoritesByUser = async () => {
            await setFavorites(await props.actions.favorite.callGetFavoritesByUser(await localStorage.getItem('idUser')))
        }
        fetchFavoritesByUser()
    }, [props.actions.favorite])

    let recipe = []

    useEffect(() => {
        if (favorites.length >= 1)
            favorites.forEach(async fav => {
                const fetchRecipe = async () => {
                    recipe.push(await props.actions.recipe.callGetRecipe(fav.idRecette))
                    await setRecipes(recipe)
                }
                fetchRecipe()
            })
    }, [favorites, props.actions.recipe])

    return (
        <div>
            <NavBar/>
            <TitleH2 title="Tous vos favoris"/>
            {console.log(recipes)}
            {
                recipes.map(recipe => {
                    return <ItemListRecipe
                        key={recipe._id}
                        idRecipe={recipe._id}
                        title={recipe.name}
                        source={recipe.photo}
                        description={recipe.description}
                    />
                })
            }
        </div>
    )
}

const mapStateToProps = state => ({
    favoriteState: state.favorite,
    recipeState: state.recipe
})

const mapDispatchToProps = () => dispatch => ({
    actions: {
        favorite: bindActionCreators(allTheActions.favorite, dispatch),
        recipe: bindActionCreators(allTheActions.recipe, dispatch)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
