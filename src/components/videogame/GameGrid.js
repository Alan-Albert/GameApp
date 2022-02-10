import React from 'react'
import { Videogame } from './Videogame';

export const GameGrid = ({games}) => {
  return (
    <div className='game-container mt-3'>
				<h1>Latest</h1>
				<div className='card-container'>

				{games.map((game, index) => {
					// return <p key={index}> {game.name} {!game.cover ? '' : 
					// <img src={game.cover.url} alt={game.name} />} </p>;
					return <Videogame key={index} {...game} />;
				})}
				</div>
			</div>
  )
}
