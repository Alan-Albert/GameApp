import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import '../../data/games';
import { gamesWithCover } from '../../data/games';
import './home.css';
import { Navbar } from './Navbar';
// import { Navbar } from './Navbar';

export const Home = () => {
  const {uid} = useSelector(state => state.auth);
  console.log("home" + uid);
	return uid ? 
		<>
			<Navbar />
			<div className='container game-container mt-3'>
				<h1>Home</h1>
				<ol>
					{gamesWithCover.map((game) => (
						<li key={game.id}>{game.name}</li>
					))}
				</ol>
			</div>
		</>
	 : <Navigate to="login" />
};
