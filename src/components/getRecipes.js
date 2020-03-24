import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ItemListRecipe from "./itemListRecipe"
import BigText from "./bigText"

const fetchRecipes = (keyword) => {
    return axios.get(`http://localhost:3000/api/findRecettes/${keyword}`)
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
}

const GetRecipes = ({keyword = "*"}) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getRecipes = async () => {
            await setData(await fetchRecipes(keyword))
        }
        getRecipes()
    }, [keyword]);

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

export default GetRecipes
