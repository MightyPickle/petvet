import { Button, Box } from '@mui/material';
import { flexbox } from '@mui/system';
import React from 'react';

function ButtonOne() {
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
            backgroundColor: 'GrayText', color: 'black', borderRadius: '9px', marginTop: '1rem', position: 'static',
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
