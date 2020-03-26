import React, {useEffect, useState} from "react"
import NavBar from "../components/navbar";
import Image from "../components/image"
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import PATH_FTP from '../config/env'
import DivWhiteBoxShadow from "../components/divWhiteBoxShadow"
import TitleH1 from "../components/titleH1"
import RedHeart from '../assets/red-heart.png'
import BlackHeart from '../assets/black-heart.png'
//---REDUX
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import allTheActions from '../actions'
//---


const SubTitle = styled.h3`
  margin: 30px 0 15px 0;
`

const ViewRecipe = props => {
    const [data, setData] = useState([])
    const [favorite, setFavorite] = useState(0)
    const idRecipe = useParams()
    const path = PATH_FTP
    let stepsJSON = []

    const dataFavorite = {idUser: localStorage.getItem('idUser'), idRecette: idRecipe.id}

    useEffect(() => {
        const fetchRecipe = async () => {
            await setData(await props.actions.recipe.callGetRecipe(idRecipe.id))
        }
        fetchRecipe()
    }, [props.actions.recipe, idRecipe.id])

    useEffect(() => {
        const fetchFavorite = async () => {
            await setFavorite(await props.actions.favorite.callGetFavorite(dataFavorite))
        }
        fetchFavorite()
    }, [props.actions.favorite, dataFavorite])

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
                                onClick={async () => setFavorite(await props.actions.favorite.callDeleteFavorite(dataFavorite))}
                                width={25} height={25}
                            />
                            :
                            <Image
                                src={BlackHeart}
                                onClick={() => setFavorite(props.actions.favorite.callPostFavorite(dataFavorite))}
                                width={25} height={25}
                            />
                    }

                    <SubTitle>Description</SubTitle>
                    {data.description}

                    <SubTitle>Les ingrédients</SubTitle>
                    {data.ingredients}

                    <SubTitle>Les étapes</SubTitle>
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewRecipe)
