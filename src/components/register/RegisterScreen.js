import { Button } from '@mui/material';
import { indigoColor } from '../../colors/colors';
import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import validator from 'validator';




export const RegisterScreen = () => {
	const dispatch = useDispatch();
	const [ formValues, handleInputChange ] = useForm({
        name: 'Alan',
        email: 'alanalbert@gmail.com',
        password: '123456',
        password2: '123456',
    });

    const { name ,email ,password ,password2 } = formValues;

    const handleRegister = (e) => {
		e.preventDefault();
		console.log('register');
		if ( isFormValid() ) {
            dispatch( startRegisterWithEmailPasswordName(email, password, name) );
        }
	}

	const isFormValid = () => {
        
        if ( name.trim().length === 0 ) {
            dispatch( setError('Name is required') )
            return false;
        } else if ( !validator.isEmail( email ) ) {
            dispatch( setError('Email is not valid') )
            return false;
        } else if ( password !== password2 || password.length < 5 ) {
            dispatch( setError('Password should be at least 6 characters and match each other') )
            return false
        }
        
        dispatch( removeError() );
       return true;
    }

	return (
		<>
			<div className='container login-container animate__animated animate__fadeIn animate__faster'>
				<div className='row'>
					<div className='col-md-6 formulario'>
						<form onSubmit={handleRegister}>
							<h1 className='mb-4'>Register</h1>
							<hr />
							<h6 className='mt-4'>Name</h6>
							<input
								name='name'
								className='mb-2'
								type='text/css'
								label='Nombre'
								autoComplete='off'
								onChange={handleInputChange}
								value={name}
							/>
							<h6>Email</h6>
							<input
								name='email'
								className='mb-2'
								type='email'
								label='Correo electrónico'
								autoComplete='off'
								onChange={handleInputChange}
								value={email}
							/>
							<h6>Password</h6>
							<input
								name='password1'
								type='password'
								className='mb-2'
								label='Contraseña'
								onChange={handleInputChange}
								value={password}
							/>
							<h6>Confirm password</h6>
							<input
								name='password2'
								type='password'
								className='mb-2'
								label='Contraseña'
								onChange={handleInputChange}
								value={password2}
							/>
							<div className='btn-submit submit'>
								<Button
									className='mt-4 mb-4'
									sx={{
										backgroundColor: indigoColor,
										className: 'btn-submit'
									}}

									variant='contained'
									type='submit'
								>
									Create account
								</Button>
							</div>
							<div className="register">
								<Link to='/login' className='link'>
								<small>Already a member? Sign in now.</small>
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
