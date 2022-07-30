import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Rating } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Stars from '../Stars/Stars';
import { getInfoCardThunk } from '../../redux/actions/infoCardAction';

export default function BasicCard() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const info = useSelector((store) => store.info);
  React.useEffect(() => {
    dispatch(getInfoCardThunk(id));
  }, []);
  console.log(info);
  return (
    <Card sx={{
      width: 600, height: 200, display: 'flex', borderRadius: '19px',
    }}
    >
      <Avatar
        alt="Remy Sharp"
        src=""
        sx={{
          width: 120, height: 120, mt: 3, ml: 2, mb: 3,
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
          {info.Doc_info.clinic_address}
        </Typography>
      </CardContent>
    </Card>
  );
}
