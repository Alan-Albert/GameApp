import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { startLogout } from '../../actions/auth';
import { LoginScreen } from '../auth/LoginScreen';

export const Navbar = () => {
	const dispatch = useDispatch();
	const { name } = useSelector((state) => state.auth);

	const handleLogout = () => {
		dispatch(startLogout());
	};

	return (
		<nav className='navbar fixed-top navbar-expand-sm navbar-dark bg-dark'>
			<div className='container-fluid'>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarTogglerDemo01'
					aria-controls='navbarTogglerDemo01'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<Link className='navbar-brand' to='/'>
					Home
				</Link>
				<div className='' id='navbarTogglerDemo01'>
					{/* <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<NavLink
							className={({ isActive }) =>
								'nav-item nav-link ' + (isActive ? 'active' : '')
							}
							to='/genres'
						>
							Genres
						</NavLink>

						<NavLink
							className={({ isActive }) =>
								'nav-item nav-link ' + (isActive ? 'active' : '')
							}
							to='/search'
						>
							Search
						</NavLink>
					</ul> */}
					<div className='w-100 order-3 dual-collapse2 d-flex justify-content-end'>
						<ul className='navbar-nav ml-auto'>
							<span className='nav-item nav-link text-profile'>{name}</span>

							<NavLink
								to={<LoginScreen />}
								className='nav-item nav-link'
								onClick={handleLogout}
							>
								Logout
							</NavLink>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
