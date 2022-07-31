import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Rating } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Stars from '../Stars/Stars';
import { getInfoCardThunk } from '../../redux/actions/infoCardAction';

export default function BasicCard({ info }) {
  return (
    <Card sx={{
      maxWidth: 700, maxHeight: 400, display: 'flex', borderRadius: '19px',
    }}
    >
      <Avatar
        alt="Remy Sharp"
        src="https://klike.net/uploads/posts/2019-07/1564314090_3.jpg"
        sx={{
          minWidth: 150, minHeight: 150, mt: 3, ml: 2, mb: 3,
        }}
      />
      <CardContent sx={{ mt: 2.5 }}>
        <Typography variant="h6" component="div">
          {info.last_name}
          {' '}
          {info.first_name}
        </Typography>
        <Typography
          variant="h7"
          component="div"
          sx={{ mt: 0.5 }}
        >
          {info.phone}
        </Typography>
        <Typography variant="h8" component="div">
          {info.Doc_info?.clinic_address}
        </Typography>
      </CardContent>
    </Card>
  );
}
