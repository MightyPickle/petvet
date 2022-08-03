import { useTheme } from '@emotion/react';
import {
  Button, Box, Modal, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody,
} from '@mui/material';
import { borderRadius, flexbox } from '@mui/system';
import Paper from '@mui/material/Paper';
import React from 'react';

function ButtonOne({ vetinfo, handleOpenSchedule }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const neutral = theme.palette.neutral.main;
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '1px solid rgba(0,0,0,0.4)',
    boxShadow: 24,
    p: 4,
    borderRadius: '19px',
  };
  function createData(name, calories, fat, carbs, protein) {
    return {
      name, calories, fat, carbs, protein,
    };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  return (
    <div className="buttons" style={{ display: flexbox }}>
      <div>
        <Button
          onClick={handleOpenSchedule}
          style={{
            backgroundColor: '#fecd45', color: 'black', borderRadius: '9px', position: 'static',
          }}
          variant="contained"
        >
          Записаться
        </Button>
      </div>
      <div>
        <Button
          onClick={handleOpen}
          style={{
            backgroundColor: neutral, color: 'black', borderRadius: '9px', marginTop: '1rem', position: 'static',
          }}
          variant="contained"
        >
          Прайс-лист
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h1">
              Прайс-лист на услуги
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: 16 }}>Услуга</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: 16 }} align="right">Цена (руб.)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {vetinfo?.Price_lists?.map((el) => (
                    <TableRow
                      key={el?.service}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {el?.service}
                      </TableCell>
                      <TableCell align="right">{el?.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Modal>
      </div>
    </div>

  );
}

export default ButtonOne;
