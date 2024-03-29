import React, {useEffect, useState, useRef} from 'react'
import ItemListRecipe from "./itemListRecipe"
import BigText from "./bigText"
//---REDUX
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import allTheActions from '../actions'
//---

const GetRecipes = (props) => {
    const [data, setData] = useState([])
    const [keyword, setKeyword] = useState(props.keyword)

    const timeOutRef = useRef(null)

    const settingKeyword = async (value) => {
        setKeyword(await value)
    }
    settingKeyword(props.keyword)

    useEffect(() => {
        clearTimeout(timeOutRef.current)
        const getRecipes = async () => {
            setData(await props.actions.recipe.fetchRecipes(keyword))
        }
        timeOutRef.current = setTimeout(getRecipes, 500)
    }, [keyword, props.actions.recipe])

    return (
        <div>
            {data.length === 0 ?
                <BigText content="Aucune recette"/> :
                data.map(recipe => {
                    return <ItemListRecipe
                        key={recipe._id}
                        idRecipe={recipe._id}
                        title={recipe.name}
                        source={recipe.photo}
                        description={recipe.description}
                    />
                })}
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

export default connect(mapStateToProps, mapDispatchToProps)(GetRecipes)
