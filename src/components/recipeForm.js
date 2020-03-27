import React, {useEffect, useState} from "react"
import {useHistory} from "react-router"
import InputForm from "./inputForm"
import TextareaForm from "./textareaForm"
import LabelForm from "./labelForm"
import ButtonForm from "./buttonForm"
import RedStar from "./redStar"
import StyledParagraph from "./styledParagraph"
import PlusLightTheme from '../assets/addStepLightTheme.png'
import PlusDarkTheme from '../assets/addStepDarkTheme.png'
import styled from "styled-components"
import Swal from 'sweetalert2'
import Image from "./image"
//---REDUX
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import allTheActions from '../actions'
//---

const BottomFixed = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  color: ${props => localStorage.getItem('theme') === 'dark' ? props.theme.darkTheme.textColor : props.theme.lightTheme.textColor};
  background-color: ${props => localStorage.getItem('theme') === 'dark' ? props.theme.darkTheme.clearGrey : '#fff'};
`

const AlignCenter = styled.div`
  text-align: center;
`

const RecipeForm = props => {
    const addStep = () => {
        const newStep = {
            label: `Etape ${steps.length + 1}`,
            inputName: `step${steps.length + 1}`
        }
        setSteps([...steps, newStep])
    }
    
    const FirstStep = [{label: "Etape 1", inputName: "step1", value: ""}]

    const [steps, setSteps] = useState(FirstStep)
    const [data, setData] = useState({})
    const [file, setFile] = useState(null)
    const [valid, setValid] = useState(0)

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
            console.log(props.actions.recipe.callCreateRecipe(data))
            setValid(await valid + props.actions.recipe.callCreateRecipe(data))

            const fileData = new FormData()
            fileData.append('file', file)
            setValid(await valid + props.actions.recipe.postPhoto(fileData))
        }
    }

    useEffect(() => {
        if (valid === 2) {
            Swal.fire(
                'Bravo !',
                'Création de la recette réussie !',
                'success'
            ).then(() => {
                history.push('/home')
            })
        }
    }, [valid, history])

    return (
        <div>
            <StyledParagraph
                content={"Remplis ce formulaire avec toutes les informations pour créer une nouvelle recette. " +
                "Tu pourras également parcourir tes fichiers et ajouter une image !"}
                marginTop={50}
            />
            <br/>
            <form onSubmit={handleSubmit}>
                <LabelForm label="Nom de la recette"/><RedStar/>
                <InputForm name="name" onChange={handleChange}/>

                <LabelForm label="Description"/><RedStar/>
                <TextareaForm name="description" onChange={handleChange}/>

                <LabelForm label="Ingrédients"/><RedStar/>
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
                    <Image src={localStorage.getItem('theme') === 'dark' ? PlusDarkTheme : PlusLightTheme} width={35} height={35} alt="Ajouter un étape" onClick={addStep}/>
                </AlignCenter>

                <LabelForm label="Ajouter une photo"/><RedStar/>
                <InputForm onChange={handleChangeFile} name="file" type="file"/>

                <BottomFixed>
                    <ButtonForm value="Créer la recette"/>
                </BottomFixed>
            </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm)
