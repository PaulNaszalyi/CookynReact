import React from 'react'
import {
    Route,
    Switch,
    BrowserRouter as Router
} from 'react-router-dom'
import Login from '../screens/login'
import Home from "../screens/home"

const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/home' component={Home} />
            </Switch>
        </Router>
    )
}

export default Routing
