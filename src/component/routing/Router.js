import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

import Header from '../header/Header';
import Dashboard from './../dashboard/Dashboard';
import Wizard from './../wizard/Wizard';

export default class Router extends Component {
    render() {
        return (
            <div>
                <header>
                    <Header />
                </header>
                <Switch>
                    <Route path='/wizard' component={Wizard} />
                    <Route path='/' component={Dashboard} />
                </Switch>

            </div>
        )
    }
}