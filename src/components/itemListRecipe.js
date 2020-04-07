import React from "react"
import styled from "styled-components"
import {useHistory} from 'react-router-dom'

const DivContent = styled.div`
  margin: 15px 0;
  display: flex;
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.themeName === 'dark' ? 'transparent' : props.theme.backgroundColor};
  box-shadow: 0px 0px 5px 0px ${props => props.theme.themeName === 'dark' ? 'transparent' : props.theme.borderGrey};
  border: 2px solid ${props => props.theme.backgroundColor};
`

const DivImage = styled.div`
  width: 35%;
  height: 160px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${prop => prop.path});
  background-size: cover;
`

const DivDescription = styled.div`
  padding: 15px;
  width: 65%;
`

const TitleRecipe = styled.h3`
  letter-spacing: 1px;
`

const ItemListRecipe = ({source = "", title = "", description = "", idRecipe = ""}) => {
    const history = useHistory()
    if(description.length >= 65) description = `${description.slice(0, 65)}...`

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
