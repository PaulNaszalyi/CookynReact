import React from "react"
import styled from "styled-components"
import {useHistory} from 'react-router-dom'

const DivContent = styled.div`
  margin: 15px;
  display: flex;
  background-color: #fff;
  box-shadow: 0px 0px 5px 0px rgba(199,199,199,1);
`

const DivImage = styled.div`
  width: 100px;
  height: 100px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${prop => prop.path});
  background-size: cover;
`

const DivDescription = styled.div`
  padding: 5px;
`

const TitleRecipe = styled.h3`

`

const ItemListRecipe = ({source = "", title = "", description = "", idRecipe = ""}) => {
    const history = useHistory()

    let path = ""
    if (source === "") path = "https://img-3.journaldesfemmes.fr/yWGwX9NZacClqzNE1Ng5Xh32mBk=/750x/smart/image-icu/10027543_1217914170.jpg"
    else path = `https://khaktus.fr/Cookyn/React/${source}`
    return (
        <DivContent key={idRecipe} onClick={() => history.push(`/view-recipe/${idRecipe}`)}>
            <DivImage path={path}/>
            <DivDescription>
                <TitleRecipe>{title}</TitleRecipe><br/>
                <span>{description}</span>
            </DivDescription>
        </DivContent>
    )
}

export default ItemListRecipe
