import React from 'react'
import {Route, Redirect} from 'react-router'
import Main from './templates/Main.js'
import Home from './templates/Home.js'
import List from './templates/List.js'

module.exports = (
    <Route component={Main}>
        <Route path='/' component={Home}/>
        <Route path='/list' component={List}/>
    </Route>
)
