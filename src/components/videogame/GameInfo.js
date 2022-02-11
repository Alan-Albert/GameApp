import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Navigate, useNavigate } from 'react-router-dom';

import { startRenew } from '../../actions/auth';
import { Navbar } from './Navbar';

import './game.css';

export const GameInfo = () => {
	const dispatch = useDispatch();
	
	useEffect(() => {
		console.log('getGames in gameinfo');
		dispatch(startRenew());
	}, [dispatch]);

	const { id } = useParams();
	console.log(id);
	const { games } = useSelector((state) => state.games);
	const idGame = games?.find((game) => game.id === id);

	const [storyline, setStoryline] = useState(false);

	const handleStoryClick = () => {
		setStoryline(!storyline);
	};

	const navigate = useNavigate();

	const handleReturn = () => {
		navigate('/');
	};


	if (!idGame) return <Navigate to='/' />;

	return (
		<>
			<Navbar />
			<div className='container vh  animate__animated animate__fadeIn'>
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
							<div className='goBackBtn'>
								<button className='btn btn-secondary' onClick={handleReturn}>
									Go back
								</button>
							</div>
					</div>
				</div>
				{idGame.screenshots.length > 0 && (
					<div className='vh'>
						<h3 className='mt-3'>Screenshots</h3>
						<div className='mt-3 images'>
							{idGame.screenshots.map((ss, index) => (
								<img
									className='imgCarousel'
									key={index}
									src={ss.url}
									alt={ss.id}
								/>
							))}
						</div>
					</div>
				)}
			</div>
		</>
	);
};
