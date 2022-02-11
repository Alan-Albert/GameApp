import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { login } from '../actions/auth';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { GameInfo } from '../components/videogame/GameInfo';
import { Home } from '../components/videogame/Home';
import { firebase } from '../firebase/firebaseConfig';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
	const dispatch = useDispatch();

	const [checking, setChecking] = useState(true);
	const { uid } = useSelector((state) => state.auth);
	const [isLogged, setIsLogged] = useState(true);

	useEffect(() => {
		uid ? localStorage.getItem('uid') : localStorage.setItem('logged', 'false');
		if (!uid) return localStorage.removeItem('uid');
		localStorage.setItem('uid', JSON.stringify(uid));
		localStorage.setItem('logged', 'true');
	}, [uid]);

	useEffect(() => {
		firebase.auth().onAuthStateChanged(async (user) => {
			if (user?.uid) {
				dispatch(login(user.uid, user.displayName));
				setIsLogged(true);
			} else {
				setIsLogged(false);
			}

			setChecking(false);
		});
	}, [dispatch, setChecking, setIsLogged, isLogged, uid]);

	if (checking) {
		return <h1>Wait...</h1>;
	}
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<PublicRoute isLogged={isLogged} />}>
					<Route path='/login' element={<LoginScreen />} />
					<Route path='/register' element={<RegisterScreen />} />
				</Route>
				<Route element={<PrivateRoute isLogged={isLogged} />}>
					<Route path='/home' element={<Home />} />
					<Route path='game/:id' element={<GameInfo />} />
				</Route>
				<Route path='*' element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};
