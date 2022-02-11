import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// import { games } from '../../data/games';
import { GameGrid } from './GameGrid';
import { Navbar } from './Navbar';

import '../../data/games';
import './home.css';
import { startRenew } from '../../actions/auth';

export const Home = () => {
	const { uid } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	//   console.log("home" + uid);
	// const gamesFiltered = games.filter((game) => game.cover);
	useEffect(() => {
		dispatch(startRenew());
	}, [dispatch]);

	return uid ? (
		<div className='full-container'>
			<Navbar />
			<section className='banner'>
				{/* <img 
					src={pacman}
					alt="Banner"
				/> */}
				<div className='text-banner'>
					<h2>Welcome to the new videogame experience</h2>
					<p></p>
				</div>
			</section>
			<section>
				<GameGrid />
			</section>
		</div>
	) : (
		<Navigate to='login' />
	);
};
