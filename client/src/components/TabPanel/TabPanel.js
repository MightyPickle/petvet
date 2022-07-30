import { Box } from '@mui/material';

export default function TabPanel(props) {
  const {
    children, value, index,
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
      <Box sx={{ p: 3 }}>
        {children}
      </Box>
      )}
    </div>
  );
}
