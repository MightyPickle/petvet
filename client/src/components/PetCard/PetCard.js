import {
  Avatar,
  Card,
  CardActionArea, CardContent, CardMedia, Typography,
} from '@mui/material';
import React from 'react';

export default function PetCard({ pet }) {
  return (
    <div>
      petCard
      <Card sx={{ minWidth: 150 }}>
        <CardActionArea
          color="secondary"
          sx={{
            height: '20rem',
            width: '17rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
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
              width: 185, height: 185, m: 2,
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {/* {pet.name} */}
              here shall be name
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
