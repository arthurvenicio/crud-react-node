import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../login';
import { Register } from '../register';
import Update from '../update';
import Dashboard from '../dashboard';
import Create from '../create';


const Routes = () => (

        
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component= { Dashboard } />
            <Route path='/login' exact component = { Login } />
            <Route path='/register'exact component = { Register } />
            <Route path='/update/:id'exact component = {  Update } />
            <Route path='/create'exact component = {  Create } />
          </Switch>
        </BrowserRouter>

);

export default Routes;