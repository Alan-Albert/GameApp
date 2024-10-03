import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGames } from '../../actions/games';
import { GameCard } from './GameCard';

export const GameGrid = () => {
	const dispatch = useDispatch();
	const {games} = useSelector(state => state.games);
	
	useEffect(() => {
		dispatch( getGames() );
	}, [dispatch]);
	
	
	return (
		<div className='game-container mt-3'>
			<h1>Our collection</h1>
			<div className='card-container'>
				{ games ? games.map((game, index) => {
					// return <p key={index}> {game.name} {!game.cover ? '' :
					// <img src={game.cover.url} alt={game.name} />} </p>;
					// console.log(game);
					return <GameCard key={index} {...game} />;
				}) : "" }
			</div>
		</div>
	);
};
