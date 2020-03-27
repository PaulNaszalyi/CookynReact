import React, {useEffect, useState} from "react"
import NavBar from "../components/navbar"
import ItemListRecipe from "../components/itemListRecipe"
//---REDUX
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import allTheActions from '../actions'
import TitleH2 from "../components/titleH2";
import BigText from "../components/bigText";
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

    useEffect(() => {
        if (favorites !== undefined && favorites.length > 0) {
            let recipeIds = []

            favorites.forEach(async fav => {
                recipeIds.push(fav.idRecette)
            })

            const fetchRecipe = async () => {
                await setRecipes(await props.actions.recipe.callFetchRecipesByFavorites(recipeIds))
            }
            fetchRecipe()
        }
    }, [favorites, props.actions.recipe])

    return (
        <div>
            <NavBar/>
            <TitleH2 title="Tous vos favoris"/>
            {recipes.length === 0 ?
                <BigText content="Aucun favoris"/> :
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
