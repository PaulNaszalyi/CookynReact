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

const Container = styled.div`
  padding: 15px;
  padding-top: 11vh;
  min-height: 100vh;
  background-color: ${props => localStorage.getItem('theme') === 'dark' ? props.theme.darkTheme.grey : props.theme.lightTheme.grey};
  box-sizing: border-box;
`

const Routing = (...props) => {
    const token = !!localStorage.getItem('token')

    const PublicRoute = ({component: Component, ...props}) => {
        return (
            <Route {...props}
                   render={innerProps => token ? <Redirect to='/home'/> : <Component {...innerProps} />}/>
        )
    }

    const PrivateRoute = ({component: Component, ...props}) => {
        return (
            <Container>
                <Route {...props} render={innerProps => token ? <Component {...innerProps} /> : <Redirect to='/'/>}/>
            </Container>
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

export default Routing
