import React, {useState} from "react"
import InputForm from "./inputForm"
import TextareaForm from "./textareaForm"
import LabelForm from "./labelForm"
import ButtonForm from "./buttonForm"
import RedStar from "./redStar"
import StyledParagraph from "./styledParagraph"
import Plus from '../assets/addStep.png'
import styled from "styled-components"
import axios from "axios";
import Swal from 'sweetalert2'
import Image from "./image"

const BottomFixed = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
`

const AlignCenter = styled.div`
  text-align: center;
`

const RecipeForm = () => {
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
    const [valid, setValid] = useState(false)

    const postRecipe = async data => {
        await axios.post('http://localhost:3000/api/recette', data)
            .then(res => {
                if (res.data.errmsg) alert(res.data.errmsg)
                else setValid(true)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const postPhoto = async file => {
        await axios.post("http://localhost:3000/api/photo", file)
            .then(res => { // then print response status
                if (res.data.errmsg) alert(res.data.errmsg)
                else setValid(true)
            })
            .catch(err => {
                console.log(err)
            })
    }

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

    const handleSubmit = event => {
        event.preventDefault()
        if (file === null || file === "" || !file)
            alert("Vous n'avez indiqué aucune photo")
        else {
            data.idUser = localStorage.getItem('idUser')
            postRecipe(data)

            const fileData = new FormData()
            fileData.append('file', file)
            postPhoto(fileData)

            if (valid)
                Swal.fire(
                    'Bravo !',
                    'Création de la recette réussie !',
                    'success'
                )
            else console.log(valid)
        }
    }

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
                    <Image src={Plus} width={35} height={35} alt="Ajouter un étape" onClick={addStep}/>
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

export default RecipeForm
