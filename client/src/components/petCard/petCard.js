import {
  Avatar,
  Card,
  CardActionArea, CardContent, CardMedia, Typography,
} from '@mui/material';
import React from 'react';

export default function petCard({ pet }) {
  return (
    <div>
      petCard
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          {/* <CardMedia
            component="img"
            height="140"
            image="https://loremflickr.com/320/240/animal"
            alt="green iguana"
          /> */}
          <Avatar
            alt=""
            src="https://loremflickr.com/320/240/animal"
            sx={{
              width: 250, height: 250,
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
