import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { login } from '../actions/auth';
import { LoginScreen } from '../components/auth/LoginScreen';
// import { RegisterScreen } from '../components/auth/RegisterScreen';
import { Home } from '../components/videogame/Home';
import { firebase } from '../firebase/firebaseConfig';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
// import { DashboardRoutes } from './DashboardRoutes';
// import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
	const dispatch = useDispatch();

	const [checking, setChecking] = useState(true);
    const {uid} = useSelector( state => state.auth);
    const [isLogged, setIsLogged] = useState(true);
    // const navigate = useNavigate();

    useEffect(() => {
	  if (!uid) return;

	  localStorage.setItem('uid', JSON.stringify(uid));
	
	}, [uid])

	useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                console.log('logged with ' + uid);
                // navigate("home", { replace: true });
				setIsLogged(true);
				// dispatch( startLoadingNotes( user.uid ) );
			} else {
                console.log('not logged');
				setIsLogged(false);
			}
            
			setChecking(false);
		});
        console.log(isLogged);
	}, [dispatch, setChecking, setIsLogged, isLogged, uid]);
    
	if (checking) {
        return <h1>Wait...</h1>;
	}
	return (
        <BrowserRouter>
			<Routes>
                {/* <Route path='/login' element={<LoginScreen />} />
                <Route path='/register' element={<RegisterScreen />} /> */}
				<Route element={<PublicRoute isLogged={isLogged} />} >
                    <Route path='/login' element={<LoginScreen />} />
                </Route>
				<Route element={<PrivateRoute isLogged={isLogged} />} >
                    <Route path='/home' element={<Home />} />
                </Route>
                <Route path='*' element={<LoginScreen />} />
			</Routes>
		</BrowserRouter>
	);
};
