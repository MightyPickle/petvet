import { Box } from '@mui/system';
import React from 'react';
import BasicCard from '../../components/BasicCard/BasicCard';
import FindSelectors from '../../components/FindSelectors/FindSelectors';
import SearchInput from '../../components/SearchInput/SearchInput';

function DocFind() {
  return (
    <Box sx={{ display: 'flex', mt: 10 }}>
      <FindSelectors />
      <Box sx={{ ml: 25 }}>
        <SearchInput />
        <Box sx={{ mt: 10 }}>
          <BasicCard />
        </Box>
        <Box sx={{ mt: 2 }}>
          <BasicCard />
        </Box>
        <Box sx={{ mt: 2 }}>
          <BasicCard />
        </Box>
      </Box>
    </Box>
  );
}

export default DocFind;
