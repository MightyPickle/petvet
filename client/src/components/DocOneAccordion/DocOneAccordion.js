import {
  Accordion,
  AccordionActions, AccordionDetails, AccordionSummary, Button, TextField, Typography,
} from '@mui/material';
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@emotion/react';

export default function DocOneAccordion({ name, content }) {
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

  // edit state control
  const [edit, setEdit] = useState({
    [name]: false,
  });
  const editButtonHandler = (e) => {
    setEdit({ [name]: true });
  };
  const cancelButtonHandler = (e) => {
    setEdit({ [name]: false });
  };
  const doneButtonHandler = (e) => {
    // updates user.name state
    setEdit({ ...edit, [name]: false });
  };

  return (
    <div>
      <Accordion className="Mui-rounded" expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ backgroundColor: neutral, borderRadius: '20px' }} square={false}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{ height: '5rem' }}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {name === 'experience' ? 'Описание' : name === 'price_list' ? 'Прайс-лист' : name === 'profiles' ? 'Кого лечу?' : 'Специализация'}
          </Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
        </AccordionSummary>
        {edit[name] ? (
          <>
            <AccordionDetails sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <TextField id="outlined-basic" variant="outlined" value="тут описание" sx={{ width: '100%', backgroundColor: 'white' }} />
            </AccordionDetails>
            <AccordionActions>
              <Button
                onClick={cancelButtonHandler}
                size="small"
                sx={{
                  backgroundColor: neutral,
                  color: 'black',
                  border: `.5px solid ${secondary}`,
                  borderRadius: '9px',
                  p: '0.5rem',
                  ml: 2,
                }}
              >
                Отмена
              </Button>
              <Button
                onClick={doneButtonHandler}
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

          <AccordionDetails sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography>
              {content}
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
    </div>
  );
}
