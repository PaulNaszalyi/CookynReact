import React from "react"
import styled from "styled-components"
import {useHistory} from 'react-router-dom'

const DivContent = styled.div`
  margin: 15px 0;
  display: flex;
  background-color: ${props => localStorage.getItem('theme') === 'dark' ? props.theme.darkTheme.clearGrey : '#fff'};
  color: ${props => localStorage.getItem('theme') === 'dark' ? props.theme.darkTheme.textColor : props.theme.lightTheme.textColor};
  box-shadow: 0px 0px 5px 0px ${props => localStorage.getItem('theme') === 'dark' ? props.theme.darkTheme.borderGrey : props.theme.lightTheme.borderGrey};  
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
