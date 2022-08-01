import { useTheme } from '@emotion/react';
import { Button, Box } from '@mui/material';
import { flexbox } from '@mui/system';
import React from 'react';

function ButtonOne() {
  const theme = useTheme();
  const neutral = theme.palette.neutral.main;
  return (
    <div className="buttons" style={{ display: flexbox }}>
      <div>
        <Button
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
          style={{
            backgroundColor: neutral, color: 'black', borderRadius: '9px', marginTop: '1rem', position: 'static',
          }}
          variant="contained"
        >
          Прайс-лист
        </Button>
      </div>
    </div>

  );
}

export default ButtonOne;
