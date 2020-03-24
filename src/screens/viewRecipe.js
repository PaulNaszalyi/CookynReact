import React, {useEffect, useState} from "react"
import NavBar from "../components/navbar";
import Image from "../components/image"
import axios from 'axios'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import PATH_FTP from '../config/env'
import DivWhiteBoxShadow from "../components/divWhiteBoxShadow"
import TitleH1 from "../components/titleH1"
import RedHeart from '../assets/red-heart.png'
import BlackHeart from '../assets/black-heart.png'

const SubTitle = styled.h3`
  margin: 30px 0 15px 0;
`

const getRecipe = (idRecipe) => {
    return axios.get(`http://localhost:3000/api/recette/${idRecipe.id}`)
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
            return err
        })
}

const getFavorite = (data) => {
    return axios.post(`http://localhost:3000/api/getfavoris`, data)
        .then(res => {
            if (res.data.errmsg) alert(res.data.errmsg)
            else return res.data.found
        })
        .catch(err => {
            return err
        })
}

const postFavorite = (data) => {
    return axios.post(`http://localhost:3000/api/favoris`, data)
        .then(res => {
            if (res.data.errmsg) alert(res.data.errmsg)
            else return true
        })
        .catch(err => {
            return err
        })
}

const deleteFavorite = (data) => {
    return axios.delete(`http://localhost:3000/api/favoris`)
        .then(res => {
            if (res.data.errmsg) alert(res.data.errmsg)
            else return true
        })
        .catch(err => {
            return err
        })
}

const ViewRecipe = () => {
    const [data, setData] = useState([])
    const [favorite, setFavorite] = useState(0)
    const idRecipe = useParams()
    const path = PATH_FTP
    let stepsJSON = []

    const dataFavorite = {idUser: localStorage.getItem('idUser'), idRecette: idRecipe.id}

    const addFavorite = async () => {
        if (await postFavorite(dataFavorite)) setFavorite(1)
    }

    const removeFavorite = async () => {
        if (await deleteFavorite(dataFavorite)) setFavorite(0)
    }

    useEffect(() => {
        const fetchRecipe = async () => {
            await setData(await getRecipe(idRecipe))
        }
        fetchRecipe()
    }, [idRecipe])

    if (data.steps !== undefined) stepsJSON = JSON.parse(data.steps)

    return (
        <div>
            <NavBar/>
            <Image src={`${path}/${data.photo}`} width={"100%"} height={"200"} alt={""}/>
            <TitleH1 title={data.name}/>
            <DivWhiteBoxShadow content={
                <div>
                    {
                        favorite ? <Image src={RedHeart} onClick={() => alert("CLICK")} width={25} height={25}/>
                            : <Image src={BlackHeart} onClick={addFavorite} width={25} height={25}/>
                    }

                    <SubTitle>Description</SubTitle>
                    {data.description}

                    <SubTitle>Les ingrédients</SubTitle>
                    {data.ingredients}

                    <SubTitle>Les étapes</SubTitle>
                    <ol>
                        {stepsJSON.map(recipe => {
                            return (<li key={recipe.label}>{recipe.value}</li>)
                        })}
                    </ol>
                </div>
            }/>
        </div>
    )
}
export default ViewRecipe
