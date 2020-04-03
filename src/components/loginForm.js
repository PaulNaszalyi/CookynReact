import React, {useState} from 'react'
import LabelForm from "./labelForm"
import InputForm from "./inputForm"
import RedStar from "./redStar"
import Image from "./image"
import {useHistory} from "react-router"
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


const LoginForm = props => {
    const [data, setData] = useState({})
    const history = useHistory()

    const handleChange = event => {
        setData({...data, [event.target.name]: event.target.value})
    }

    const handleClick = async event => {
        event.preventDefault()
        if (await props.actions.login.login(data)) window.location.reload()
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
                                <LabelForm label={props.t('login.mail')}/><RedStar/><br/>
                                <InputForm name="email" onChange={handleChange}/><br/>
                                <LabelForm label={props.t('login.password')}/><RedStar/><br/>
                                <InputForm type="password" name="password" onChange={handleChange}/><br/>
                            </div>
                            <ButtonForm value={props.t('login.login')}/>
                        </>
                    }
                    onSubmit={handleClick}
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

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(LoginForm))
