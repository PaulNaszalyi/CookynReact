import React, {useEffect, useState} from "react"
import NavBar from "../components/navbar";
import Image from "../components/image"
import axios from 'axios'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'

const TitleRecipe = styled.h1`
  text-align: center;
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

const ViewRecipe = () => {
    const [data, setData] = useState([])
    const idRecipe = useParams()
    const path = "https://khaktus.fr/Cookyn/React"

    useEffect(() => {
        const fetchRecipe = async () => {
            await setData(await getRecipe(idRecipe))
        }
        fetchRecipe()
    }, [idRecipe])

    return (
        <div>
            <NavBar/>
            <Image src={`${path}/${data.photo}`} width={"100%"} height={"200"} alt={""}/>
            <TitleRecipe>{data.name}</TitleRecipe>
        </div>
    )
}
export default ViewRecipe
