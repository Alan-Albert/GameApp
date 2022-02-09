import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { login } from '../actions/auth';
import { LoginScreen } from '../components/login/LoginScreen';
import { RegisterScreen } from '../components/register/RegisterScreen';
import { Videogame } from '../components/videogame/Videogame';
import { firebase } from '../firebase/firebaseConfig'

export const AppRouter = () => {
    const dispatch = useDispatch();

    const [ checking, setChecking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);



    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( async(user) => {

            if ( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) );
                setIsLoggedIn( true );
                // dispatch( startLoadingNotes( user.uid ) );

            } else {
                setIsLoggedIn( false );
            }

            setChecking(false);

        });
        
    }, [ dispatch, setChecking, setIsLoggedIn ])


    if ( checking ) {
        return (
            <h1>Wait...</h1>
        )
    }
	return (
		<BrowserRouter>
			<Routes>
            {/* <Route path="login" element={<Login />} /> */}
                <Route path='/login' element={<LoginScreen />} />
                <Route path='/register' element={<RegisterScreen />} />
                <Route path='/home' element={<Videogame />} />
                <Route path='/*' element={<LoginScreen />} />
            </Routes>
		</BrowserRouter>
	);
};
