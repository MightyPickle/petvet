import {
  Accordion,
  AccordionActions, AccordionDetails, AccordionSummary, Box, Button, Chip, Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField, Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@emotion/react';
import { useDispatch } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';
import docInputController from '../../utils/docInputController';
import { docUpdateThunk } from '../../redux/actions/userActions';
import { collapsedAccordionStyle, expandedAccordionStyle } from '../../utils/stylesAccordion';

export default function DocChipsAccordion({ type, content, options }) {
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
    console.log(input);
    dispatch(docUpdateThunk({ type: `${type}_add`, input: input.id }));

    setEdit({ ...edit, [type]: false });
  };
  const removeHandler = (el) => {
    console.log(content);
    console.log(el);
    dispatch(docUpdateThunk({ type: `${type}_remove`, input: el.id }));
  };

  return (
    <Accordion
        // className="MuiAccordion"
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
          {type === 'experience' ? 'Описание'
            : type === 'Price_list' ? 'Прайс-лист'
              : type === 'Profiles' ? 'Кого лечу?'
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
            <FormControl sx={{ m: 1, minWidth: 120, width: '20rem' }}>
              <Select
                value={input}
                onChange={(e) => setInput(e.target.value)}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                {options?.map((el) => (
                  <MenuItem key={el.id} value={el}>
                    {el.name}
                  </MenuItem>
                )) }
                <MenuItem value="">
                  <em>Выбрать</em>
                </MenuItem>
              </Select>
            </FormControl>
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
          <Box sx={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}
          >
            {(content?.map((el, index) => (
              <Box
                sx={{
                  backgroundColor: neutral,
                  width: 'max-content',
                  padding: '3px',
                  borderRadius: '6px',
                  marginRight: '.5rem',
                  p: 1,
                  alignItems: 'center',
                  display: 'flex',
                }}
                key={`${index}-${el.id}`}
              >
                <Typography variant="body1" sx={{ display: 'inline-block' }}>{el.name}</Typography>
                <ClearIcon sx={{ cursor: 'pointer' }} onClick={() => removeHandler(el)} />
              </Box>
            ))) || 'Информация отсутствует'}

          </Box>
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
