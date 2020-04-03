import React, {useEffect, useState} from "react"
import NavBar from "../components/navbar";
import Image from "../components/image"
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import ENV from '../config/env'
import DivWhiteBoxShadow from "../components/divWhiteBoxShadow"
import TitleH1 from "../components/titleH1"
import RedHeart from '../assets/red-heart.png'
import BlackHeart from '../assets/black-heart.png'
//---REDUX
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import allTheActions from '../actions'
//---
//---TRANSLATION
import {withTranslation} from 'react-i18next'
//


const SubTitle = styled.h3`
  margin: 30px 0 15px 0;
`

const ViewRecipe = props => {
    const [data, setData] = useState([])
    const [favorite, setFavorite] = useState(false)
    const idRecipe = useParams()
    const path = ENV.PATH_FTP
    let stepsJSON = []

    const dataFavorite = {idUser: localStorage.getItem('idUser'), idRecette: idRecipe.id}

    useEffect(() => {
        const fetchRecipe = async () => {
            setData(await props.actions.recipe.getRecipe(idRecipe.id))
        }
        fetchRecipe()
    }, [props.actions.recipe, idRecipe.id])

    useEffect(() => {
        const fav = {idUser: localStorage.getItem('idUser'), idRecette: idRecipe.id}
        const fetchFavorite = async () => {
            setFavorite(await props.actions.favorite.getFavorite(fav))
        }
        fetchFavorite()
    }, [props.actions.favorite, idRecipe.id])

    if (data.steps !== undefined) stepsJSON = JSON.parse(data.steps)

    return (
        <div>
            <NavBar/>
            <Image src={`${path}/${data.photo}`} width={"100%"} height={"auto"} alt={""}/>
            <TitleH1 title={data.name}/>
            <DivWhiteBoxShadow content={
                <div>
                    {
                        favorite ?
                            <Image
                                src={RedHeart}
                                onClick={async () => setFavorite(await props.actions.favorite.removeFavorite(dataFavorite))}
                                width={25} height={25}
                            />
                            :
                            <Image
                                src={BlackHeart}
                                onClick={() => setFavorite(props.actions.favorite.addFavorite(dataFavorite))}
                                width={25} height={25}
                            />
                    }

                    <SubTitle>{props.t('recipe.description')}</SubTitle>
                    {data.description}

                    <SubTitle>{props.t('recipe.ingredients')}</SubTitle>
                    {data.ingredients}

                    <SubTitle>{props.t('recipe.steps')}</SubTitle>
                    <ol>
                        {stepsJSON.map(recipe => {
                            return (<li key={recipe.label}>{recipe.value}<br/><br/></li>)
                        })}
                    </ol>
                </div>
            }/>
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

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(ViewRecipe))
