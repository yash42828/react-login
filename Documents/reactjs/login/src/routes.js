import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '././components/Home/Home';
import Signup from './components/Signup/Signup';
import createBrowserHistory from 'history/createBrowserHistory';
import Login from './components/Login/Login';
import Welcome from './components/Welcome/Welcome';
import NotFound from './components/NotFound/NotFound';


const Routes = () => (
    <BrowserRouter history={createBrowserHistory()}> 
    <Switch>  
    <Route exact path='/' component={Welcome} />
    <Route path='/login' component={Login} />
    <Route path='/signup' component={Signup} />
    <Route path='/home' component={Home} />
    <Route path='*' component={NotFound} />
    </Switch>
    </BrowserRouter>
)

export default Routes;