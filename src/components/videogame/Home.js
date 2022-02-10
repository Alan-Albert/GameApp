import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import '../../data/games';
import { games } from '../../data/games';
import './home.css';
import { Navbar } from './Navbar';
import { Videogame } from './Videogame';
// import { Navbar } from './Navbar';

export const Home = () => {
	const { uid } = useSelector((state) => state.auth);
	//   console.log("home" + uid);
	const gamesFiltered = games.filter(game => game.cover)
	return uid ? (
		<>
			<Navbar />
			<div className='game-container mt-3'>
				<h1>Latest</h1>
				<div className='card-container'>

				{gamesFiltered.map((game, index) => {
					// return <p key={index}> {game.name} {!game.cover ? '' : 
					// <img src={game.cover.url} alt={game.name} />} </p>;
					return <Videogame key={index} {...game} />;
				})}
				</div>
			</div>
		</>
	) : (
		<Navigate to='login' />
	);
};
