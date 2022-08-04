import {
  Accordion, AccordionActions, AccordionDetails,
  AccordionSummary, Button, Divider, Paper, Table,
  TableBody, TableCell, TableContainer, TableHead, TableRow,
  TextField, Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useTheme } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { red } from '@mui/material/colors';
import { docUpdateThunk } from '../../redux/actions/userActions';
import { collapsedAccordionStyle, expandedAccordionStyle } from '../../utils/stylesAccordion';

export default function DocPriceAccordion({ type, content }) {
  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // colors
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const neutral = theme.palette.neutral.main;

  // input
  const [input, setInput] = useState({
    service: '',
    price: null,
  });

  const onChangeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // edit state control

  const [edit, setEdit] = useState({
    [type]: false,
  });
  const editButtonHandler = (e) => {
    setEdit({ [type]: true });
  };
  const cancelButtonHandler = (e) => {
    setEdit({ [type]: false });
  };
  const saveButtonHandler = (e) => {
    // updates state
    if (input.price) {
      const newPrice = input.price.replace(/[^\d.]/g, '');
      dispatch(docUpdateThunk({ type: `${type}_add`, input: { ...input, price: newPrice } }));
    } else {
      dispatch(docUpdateThunk({ type: `${type}_add`, input }));
    }
    setEdit({ ...edit, [type]: false });
  };
  const removeHandler = (el) => {
    console.log(content);
    console.log(el);
    dispatch(docUpdateThunk({ type: `${type}_remove`, input: el.id }));
  };

  return (
    <Accordion
      expanded={expanded === type}
      onChange={handleChange(type)}
      sx={!expanded ? collapsedAccordionStyle : expandedAccordionStyle}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        sx={{ height: '4rem' }}
      >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>
          Прайс-лист
        </Typography>
      </AccordionSummary>
      <Divider />
      {edit[type] ? (
        <>
          <AccordionDetails sx={{
            display: 'flex', justifyContent: 'flex-start', alignItems: 'center', pt: 2,
          }}
          >
            <TextField id="outlined-basic" variant="outlined" value={input.service || ''} name="service" sx={{ width: '50%', backgroundColor: 'white', mr: 1 }} placeholder="Услуга" onChange={(e) => onChangeHandler(e)} />
            <TextField id="outlined-basic" variant="outlined" value={input.price || ''} name="price" sx={{ backgroundColor: 'white' }} placeholder="Цена" onChange={(e) => onChangeHandler(e)} />
          </AccordionDetails>
          <AccordionActions>
            <Button
              onClick={cancelButtonHandler}
              size="small"
              sx={{
                backgroundColor: neutral,
                color: 'black',
                borderRadius: '9px',
                p: '0.5rem',
                ml: 2,
              }}
            >
              Отмена
            </Button>
            <Button
              onClick={saveButtonHandler}
              size="small"
              sx={{
                backgroundColor: primary, color: 'black', borderRadius: '9px', p: '0.5rem', ml: 2,
              }}
            >
              Сохранить
            </Button>
          </AccordionActions>
        </>

      ) : (
        <AccordionDetails sx={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 2, maxHeight: '30vh',
        }}
        >
          {content ? (
            <TableContainer
              component={Paper}
              sx={{
                width: '85%', maxHeight: '30vh', borderRadius: '9px', backgroundColor: neutral,
              }}
            >
              <Table stickyHeader sx={{ minWidth: 500 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold' }}>Услуга</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>Цена</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 'bold', width: '2rem' }} />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {content.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.service}
                      </TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                      <TableCell align="center">
                        <DeleteForeverIcon sx={{ color: red[600], cursor: 'pointer' }} onClick={() => removeHandler(row)} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : 'Информация отсутствует'}
          <AccordionActions>
            <Button
              onClick={editButtonHandler}
              size="small"
              sx={{
                backgroundColor: primary, color: 'black', borderRadius: '9px', p: '0.5rem',
              }}
            >
              Добавить
            </Button>
          </AccordionActions>
        </AccordionDetails>
      )}
    </Accordion>
  );
}
