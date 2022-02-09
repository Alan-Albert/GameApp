// import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import { Link } from 'react-router-dom';

import './login.css';

export const LoginScreen = () => {
	const dispatch = useDispatch();
	const [formValues, handleInputChange] = useForm({
		email: 'alanalbert@gmail.com',
		password: '123456',
	});

	const { email, password } = formValues;
	const handleGoogleLogin = (e) => {
		e.preventDefault();
		console.log('googleSignIn');
	};

	const handleLogin = (e) => {
		e.preventDefault();
		console.log('SignIn');
		console.log(formValues);
		dispatch(startLoginEmailPassword(email, password));
	};

	return (
		<>
			<div className='container login-container animate__animated animate__fadeIn animate__faster'>
				<div className='row'>
					<div className='col-md-6 formulario'>
						<form onSubmit={handleLogin}>
							<h1 className='mb-4'>Login</h1>
							<hr />
							<h6 className='mt-4'>Email</h6>
							<input
								id='email'
								className='mb-4'
								name='email'
								type='email'
								label='Correo electrónico'
								autoComplete='off'
								onChange={handleInputChange}
								value={email}
							/>
							<h6>Password</h6>
							<input
								id='password'
								type='password'
								className='mb-4'
								name='password'
								label='Contraseña'
								onChange={handleInputChange}
								value={password}
							/>
							<div className='submit'>
								<Button
									className='btn-submit mb-4'
									color='success'
									variant='contained'
									type='submit'
								>
									Sign in
								</Button>
							</div>  
							<hr />
							<h6>Sign in with other platforms</h6>
							<div className='auth__social-networks'>
								<div className='google-btn' onClick={handleGoogleLogin}>
									<div className='google-icon-wrapper'>
										<img
											className='google-icon'
											src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
											alt='google button'
										/>
									</div>
									<p className='btn-text'>
										<b>Sign in with google</b>
									</p>
								</div>
							</div>
							<div>
								<Link to='/register' className='link'>
								<small>Not a member yet? Create an account now.</small>
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
