import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
	return (
		<div className='auth-main'>
			<div className='auth-box-container'>
				<Routes>
					<Route path='login' element={<LoginScreen />} />
					<Route path='register' element={<RegisterScreen />} />
					<Route path='*' element={<Navigate to='/login' />} />
				</Routes>
			</div>
		</div>
	);
};
