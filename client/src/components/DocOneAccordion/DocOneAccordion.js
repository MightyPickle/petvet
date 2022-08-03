import {
  Accordion,
  AccordionActions, AccordionDetails, AccordionSummary, Box, Button, Chip, Divider,
  TextField, Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@emotion/react';
import { useDispatch } from 'react-redux';
import sx from '@mui/system/sx';
import docInputController from '../../utils/docInputController';
import { docUpdateAC, docUpdateThunk } from '../../redux/actions/userActions';

export default function DocOneAccordion({ type, content }) {
  // for accordion
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // colors
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const neutral = theme.palette.neutral.main;

  // input control
  const [input, setInput] = useState('');
  useEffect(() => {
    setInput(content || '');
  }, []);

  // edit state control
  const dispatch = useDispatch();
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
    // updates user.type state
    // console.log(docInputController(type, input));
    dispatch(docUpdateThunk(docInputController(type, input)));

    setEdit({ ...edit, [type]: false });
  };

  return (
    <Accordion
      // className="MuiAccordion"
      expanded={expanded === type}
      onChange={handleChange(type)}
      sx={!expanded ? {
        backgroundColor: neutral, p: 2, m: '.5rem', borderRadius: '9px',
      } : {
        backgroundColor: 'white', p: 2, m: '.5rem', borderRadius: '9px', border: `.5px solid ${primary}`,
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        sx={{ height: '4rem' }}
      >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>
          {type === 'experience' ? 'Описание'
            : type === 'price_list' ? 'Прайс-лист'
              : type === 'profiles' ? 'Кого лечу?'
                : 'Специализация'}
        </Typography>
      </AccordionSummary>
      <Divider />
      {edit[type] ? (
        <>
          <AccordionDetails sx={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 2,
          }}
          >
            <TextField
              id="outlined-basic"
              variant="outlined"
              name={type}
              value={input}
              sx={{
                width: '100%', backgroundColor: 'white', borderRadius: '5px',
              }}
              onChange={(e) => setInput(e.target.value)}
            />
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
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 2,
        }}
        >
          <Typography>
            { content || 'Информация отсутствует'}
          </Typography>
          <AccordionActions>
            <Button
              onClick={editButtonHandler}
              size="small"
              sx={{
                backgroundColor: primary, color: 'black', borderRadius: '9px', p: '0.5rem',
              }}
            >
              Редактировать
            </Button>
          </AccordionActions>
        </AccordionDetails>
      )}
    </Accordion>
  );
}
