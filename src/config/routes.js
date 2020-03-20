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

const Routing = (...props) => {
    const token = !!localStorage.getItem('token')

    const PublicRoute = ({component: Component, ...props}) => {
        return (
           <Route {...props} render={innerProps => token ? <Redirect to='/home' /> : <Component {...innerProps} />}/>
        )
    }

    const PrivateRoute = ({component: Component, ...props}) => {
        return (
           <Route {...props} render={innerProps => token ? <Component {...innerProps} /> : <Redirect to='/' />}/>
        )
    }

    return (
        <Router>
            <Switch>
                <PublicRoute exact {...props} path='/' component={Login} />
                <PrivateRoute exact {...props} path='/home' component={Home} />
                <PrivateRoute exact {...props} path='/create-recipe' component={CreateRecipe} />
                <PrivateRoute exact {...props} path='/view-recipe/:id' component={ViewRecipe} />
            </Switch>
        </Router>
    )
}

export default Routing
