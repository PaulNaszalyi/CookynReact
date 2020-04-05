import React from 'react'
import {
    Route,
    Switch,
    Redirect,
    BrowserRouter as Router
} from 'react-router-dom'
import Login from '../screens/login'
import Home from "../screens/home"
import CreateRecipe from "../screens/createRecipe"
import ViewRecipe from "../screens/viewRecipe"
import Favorites from "../screens/favorites"
import Settings from "../screens/settings"
import styled from "styled-components"
import {ThemeProvider} from 'styled-components'
//---connect
import {connect} from 'react-redux'
//---

const Container = styled.div`
  padding: 15px;
  padding-top: 11vh;
  min-height: 100vh;
  background-color: ${props => props.theme.grey};
  box-sizing: border-box;
`

const Routing = (props) => {
    const token = !!localStorage.getItem('token')

    const PublicRoute = ({component: Component, ...props}) => {
        return (
            <ThemeProvider theme={props.themeState.theme}>
                <Route {...props}
                       render={innerProps => token ? <Redirect to='/home'/> : <Component {...innerProps} />}/>
            </ThemeProvider>
        )
    }

    const PrivateRoute = ({component: Component, ...props}) => {
        return (
            <ThemeProvider theme={props.themeState.theme}>
                <Container>
                    <Route {...props}
                           render={innerProps => token ? <Component {...innerProps} /> : <Redirect to='/'/>}/>
                </Container>
            </ThemeProvider>
        )
    }

    return (
        <Router>
            <Switch>
                <PublicRoute exact {...props} path='/' component={Login}/>
                <PrivateRoute exact {...props} path='/home' component={Home}/>
                <PrivateRoute exact {...props} path='/create-recipe' component={CreateRecipe}/>
                <PrivateRoute exact {...props} path='/view-recipe/:id' component={ViewRecipe}/>
                <PrivateRoute exact {...props} path='/favorites' component={Favorites}/>
                <PrivateRoute exact {...props} path='/settings' component={Settings}/>
            </Switch>
        </Router>
    )
}

const mapStateToProps = state => ({
    themeState: state.theme,
})

export default connect(mapStateToProps)(Routing)
