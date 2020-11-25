import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { firebase } from '../configuration/firebase-config'
import RouteAuth from './RouteAuth';
import RoutePrivate from './RoutePrivate';

import Administration from '../screens/Administration';
import { login } from '../actions/auth';
import RoutePublic from './RoutePublic';
import { startLoadingPlants } from '../actions/plants';

const RouteApp = () => {

    const dispatch = useDispatch();

    const [ checking, setChecking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged( (user) => {
            if ( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) );
                setIsLoggedIn( true );
                dispatch( startLoadingPlants( user.uid ) );
            } else {
                setIsLoggedIn( false );
            }
            setChecking(false);
        });
    }, [ dispatch, setChecking, setIsLoggedIn ])


    if ( checking ) {
        return (
            <h1>Espere...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <RoutePublic 
                        path="/auth"
                        component={ RouteAuth }
                        isAuthenticated={ isLoggedIn }
                    />
                    <RoutePrivate 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/"
                        component={ Administration }
                    />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}

export default RouteApp;