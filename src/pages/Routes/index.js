import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import { AuthProvider } from '../../auth/auth';
import { PrivateRoute } from '../../context/privateRouter';
import Register from '../register';
import Login from '../login';
import Update from '../update';
import Dashboard from '../dashboard';
import Create from '../create';
import notFound from '../not-found';


const Routes = () => (

      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path='/' component= { Dashboard } />
            <PrivateRoute exact path='/update/:id' component = {  Update } />
            <PrivateRoute exact path='/create' component = {  Create } />
            <Route exact path='/login' component = { Login } />
            <Route exact path='/register' component = { Register } />
            <Route component = {notFound} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>

);

export default Routes;