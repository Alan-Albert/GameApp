import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { login } from '../actions/auth';
import { Home } from '../components/videogame/Home';
// import { Home } from '../components/videogame/Home';
import { firebase } from '../firebase/firebaseConfig';
import { AuthRouter } from './AuthRouter';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
	const dispatch = useDispatch();

	const [checking, setChecking] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
    const {uid} = useSelector( state => state.auth);
    console.log(uid);

	useEffect(() => {
		firebase.auth().onAuthStateChanged(async (user) => {
			if (user?.uid) {
				dispatch(login(user.uid, user.displayName));
				setIsLoggedIn(true);
				// dispatch( startLoadingNotes( user.uid ) );
			} else {
				setIsLoggedIn(false);
			}

			setChecking(false);
		});
	}, [dispatch, setChecking, setIsLoggedIn, uid]);

	if (checking) {
		return <h1>Wait...</h1>;
	}
	return (
		<BrowserRouter>
			<Routes>
				{/* <Route
					path='/login'
					element={
						<PublicRoute>
							<AuthRouter />
						</PublicRoute>
					}
				/>

				<Route
					path='/*'
					element={
						<PrivateRoute>
							<DashboardRoutes />
						</PrivateRoute>
					}
				/> */}
                <Route path='/home' isAuthenticated={isLoggedIn} element={<Home />} />
                <Route path='/auth' isAuthenticated={isLoggedIn} element={<AuthRouter />} />
				<Route path='/*' isAuthenticated={isLoggedIn} element={<AuthRouter />} />
			</Routes>
		</BrowserRouter>
	);
};
