import React, {useState} from "react"
import {useHistory} from "react-router"
import InputForm from "./inputForm"
import TextareaForm from "./textareaForm"
import LabelForm from "./labelForm"
import ButtonForm from "./buttonForm"
import RedStar from "./redStar"
import StyledParagraph from "./styledParagraph"
import PlusLightTheme from '../assets/addStep.png'
import PlusDarkTheme from '../assets/addStepDarkTheme.png'
import styled from "styled-components"
import Swal from 'sweetalert2'
import Image from "./image"
//---REDUX
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import allTheActions from '../actions'
//---
//---TRANSLATION
import {withTranslation} from 'react-i18next'
//

const AlignCenter = styled.div`
  text-align: center;
`

const RecipeForm = props => {
    const addStep = () => {
        const newStep = {
            label: `${props.t('newRecipe.step')} ${steps.length + 1}`,
            inputName: `step${steps.length + 1}`
        }
        setSteps([...steps, newStep])
    }

    const FirstStep = [{label: `${props.t('newRecipe.step')} 1`, inputName: "step1", value: ""}]

    const [steps, setSteps] = useState(FirstStep)
    const [data, setData] = useState({})
    const [file, setFile] = useState(null)

    const history = useHistory()

    const handleChangeStep = event => {
        const iterator = parseInt(event.target.name.substring(4)) - 1
        steps[iterator].value = event.target.value
        setData({...data, steps: JSON.stringify(steps)})
    }

    const handleChange = event => {
        setData({...data, [event.target.name]: event.target.value})
    }

    const handleChangeFile = (event) => {
        setFile(event.target.files[0])
        setData({...data, photo: event.target.files[0].name})
    }

    const handleSubmit = async event => {
        event.preventDefault()
        if (file === null || file === "" || !file)
            alert("Vous n'avez indiqué aucune photo")
        else {
            data.idUser = localStorage.getItem('idUser')
            const fileData = new FormData()
            fileData.append('file', file)

            if (await props.actions.recipe.createRecipe(data) && await props.actions.recipe.postPhoto(fileData))
                Swal.fire(
                    'Bravo !',
                    'Création de la recette réussie !',
                    'success'
                ).then(() => {
                    history.push('/home')
                })
        }
    }

    return (
        <>
            <StyledParagraph
                content={props.t('newRecipe.info')}
                marginBottom={"35px"}
            />
            <br/>
            <form onSubmit={handleSubmit}>
                <LabelForm label={props.t('newRecipe.name')}/><RedStar/>
                <InputForm name="name" onChange={handleChange}/>

                <LabelForm label={props.t('newRecipe.description')}/><RedStar/>
                <TextareaForm name="description" onChange={handleChange}/>

                <LabelForm label={props.t('newRecipe.ingredients')}/><RedStar/>
                <TextareaForm name="ingredients" onChange={handleChange}/>

                {steps.map(input => {
                        return (
                            <div key={input.label}>
                                <LabelForm label={input.label}/><RedStar/>
                                <InputForm name={input.inputName} onChange={handleChangeStep}/>
                            </div>
                        )
                    }
                )}

                <AlignCenter>
                    <Image src={props.themeState.theme.themeName === 'dark' ? PlusDarkTheme : PlusLightTheme} width={35}
                           height={35} alt="Ajouter un étape" onClick={addStep}/>
                </AlignCenter>

                <LabelForm label={props.t('newRecipe.photo')}/><RedStar/>
                <InputForm onChange={handleChangeFile} name="file" type="file"/>

                <ButtonForm value={props.t('newRecipe.button')}/>
            </form>
        </>
    )
}


const mapStateToProps = state => ({
    favoriteState: state.favorite,
    recipeState: state.recipe,
    themeState: state.theme
})

const mapDispatchToProps = () => dispatch => ({
    actions: {
        favorite: bindActionCreators(allTheActions.favorite, dispatch),
        recipe: bindActionCreators(allTheActions.recipe, dispatch)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(RecipeForm))
