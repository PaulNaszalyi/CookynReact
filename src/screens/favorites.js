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
//---TRANSLATION
import {withTranslation} from 'react-i18next'
//

const Favorites = props => {

    //console.log(props)

    const [favorites, setFavorites] = useState([])
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        const fetchFavoritesByUser = async () => {
            setFavorites(await props.actions.favorite.getFavoritesByUser(await localStorage.getItem('idUser')).payload)
        }
        fetchFavoritesByUser()
    }, [props.actions.favorite])

    useEffect(() => {
        if (favorites !== undefined && favorites.length > 0) {
            const fetchRecipe = async () => {
                setRecipes(await props.actions.recipe.fetchRecipesByFavs(favorites).query)
            }
            fetchRecipe()
        }
    }, [favorites, props.actions.recipe])

    return (
        <div>
            <NavBar/>
            <TitleH2 title={props.t('favorites.allFavorites')}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Favorites))
