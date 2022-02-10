import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const Videogame = ({name, cover, summary, genres}) => {
  return (
    <Card className='game-card' sx={{ maxWidth: 345 }}>
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