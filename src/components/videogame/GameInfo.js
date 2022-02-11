import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './game.css';
import { Navbar } from './Navbar';

export const GameInfo = () => {
	const { id } = useParams();
	const { games } = useSelector((state) => state.games);
	const idGame = games.find(
		(game) => Number.parseInt(game.id) === Number.parseInt(id)
	);

	const [storyline, setStoryline] = useState(false);

	const handleStoryClick = () => {
		setStoryline(!storyline);
	};

	return (
		<>
			<Navbar />
			<div className='container vh'>
				<div className='row cont'>
					<div className='col-5'>
						<h1>{idGame.name}</h1>
						<img src={idGame.cover.url} alt={idGame.name} />
					</div>
					<div className='col-7'>
						<p>{storyline ? idGame.storyline : idGame.summary}</p>
						{idGame.storyline && (
							<button className='btn btn-primary' onClick={handleStoryClick}>
								{!storyline ? 'Full storyline' : 'Summary'}
							</button>
						)}
						<div>
							{idGame.rating && (
								<h5 className='mt-3'>Rating: {idGame.rating}</h5>
							)}
							{idGame.follows && (
								<h5 className='mt-3'>Followers: {idGame.follows}</h5>
							)}
						</div>
					</div>
				</div>
				{idGame.screenshots.length > 0 && (
					<div>
						<h3 className='mt-3'>Screenshots</h3>
						<div className='mt-3 images'>
							{idGame.screenshots.map((ss, index) => (
								<img className='imgCarousel' key={index} src={ss.url} alt={ss.id} />
							))}
						</div>
					</div>
				)}
			</div>
		</>
	);
};
