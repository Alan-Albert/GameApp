import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const GameCard = ({id, name, cover, summary, genres}) => {
  const nav = useNavigate();
  const handleGameClick = () => {
    console.log(id);
    nav(`game:${id}`);
  }
  return (
    <Card className='game-card' sx={{ maxWidth: 345 }} onClick={handleGameClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={cover.url}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            { summary.substring(0,100) }...
          </Typography>
          
          { genres ? 
          <div className='mt-2 genres'>
              <small className='genres'> Genres: {genres.map(genre => ( `${genre.name} ` ))} </small>
          </div>
          : ""}
        </CardContent>
      </CardActionArea>
    </Card>
  )
};
