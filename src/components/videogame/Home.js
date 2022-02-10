import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { games } from '../../data/games';
import { GameGrid } from './GameGrid';
import { Navbar } from './Navbar';

import '../../data/games';
import './home.css';

export const Home = () => {
	const { uid } = useSelector((state) => state.auth);
	//   console.log("home" + uid);
	const gamesFiltered = games.filter(game => game.cover)
	return uid ? (
		<>
			<Navbar />
			<GameGrid games={gamesFiltered}/>
		</>
	) : (
		<Navigate to='login' />
	);
};
