import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import RedStar from "./redStar"
import Image from "./image";
import InputForm from "./inputForm"
import LabelForm from "./labelForm"
import ButtonForm from "./buttonForm"
import Form from "./loginForms"
import DivFormLogin from "./divFormLogin"
import ClosePopup from "./closePopup"
//---REDUX
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import allTheActions from '../actions'
//---
//---TRANSLATION
import {withTranslation} from 'react-i18next'
//

const RegsiterForm = props => {
    const [data, setData] = useState({})
    const history = useHistory()

    const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value})
    }

    const handleClick = async event => {
        event.preventDefault()
        //On vérifie d'abord les 2 mots de passe
        if (data.password === data.passwordConfirm) {
            //On crée un objet sans le passwordConfirm
            const dataUser = {
                email: data.email,
                firstname: data.firstname,
                lastname: data.lastname,
                password: data.password
            }
            if (await props.actions.login.register(dataUser).query) window.location.reload()
        } else alert('Les mots de passe sont différents')

    }

    return (
        <DivFormLogin content={
            <>
                <ClosePopup content={<Image src={require("../assets/close.png")} width={15} height={15}/>}
                            onClick={() => history.push('/home')}
                />
                <Form
                    content={
                        <>
                            <div>
                                <LabelForm label={props.t('register.mail')}/><RedStar/>
                                <InputForm type="text" name="email" onChange={handleChange}/><br/>
                                <LabelForm label={props.t('register.firstname')}/><RedStar/>
                                <InputForm type="text" name="firstname" onChange={handleChange}/><br/>
                                <LabelForm label={props.t('register.lastname')}/><RedStar/>
                                <InputForm type="text" name="lastname" onChange={handleChange}/><br/>
                                <LabelForm label={props.t('register.password')}/><RedStar/>
                                <InputForm type="password" name="password" onChange={handleChange}/><br/>
                                <LabelForm label={props.t('register.passwordConfirm')}/><RedStar/>
                                <InputForm type="password" name="passwordConfirm" onChange={handleChange}/><br/>
                            </div>
                            <ButtonForm value="INSCRIPTION"/>
                        </>
                    }
                    onSubmit={handleClick}
                    register={true}
                />
            </>
        }/>
    )
}

const mapStateToProps = state => ({
    loginState: state.login
})

const mapDispatchToProps = () => dispatch => ({
    actions: {
        login: bindActionCreators(allTheActions.login, dispatch)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(RegsiterForm))
