import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DialogActions from '@mui/material/DialogActions';
import { PickersDay } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

import { useLocaleText, WrapperVariantContext } from '@mui/x-date-pickers/internals';

const styles = {
  dayWithDotContainer: {
    position: 'relative',
  },
  dayWithDot: {
    position: 'absolute',
    backgroundColor: 'black',
    height: 0,
    width: 0,
    border: '2px solid',
    borderRadius: 4,
    borderColor: 'rgba(0,0,0,0.5)',
    right: '50%',
    transform: 'translateX(1px)',
    top: '80%',
  },
};

function CustomActionBar(props) {
  const {
    onAccept, onClear, onCancel, onSetToday, actions,
  } = props;
  const wrapperVariant = React.useContext(WrapperVariantContext);
  const localeText = useLocaleText();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = 1;

  const actionsArray = typeof actions === 'function' ? actions(wrapperVariant) : actions;

  if (actionsArray == null || actionsArray.length === 0) {
    return null;
  }

  const menuItems = actionsArray?.map((actionType) => {
    switch (actionType) {
      case 'clear':
        return (
          <MenuItem
            data-mui-test="clear-action-button"
            onClick={() => {
              onClear();
              setAnchorEl(null);
            }}
            key={actionType}
          >
            {localeText.clearButtonLabel}
          </MenuItem>
        );

      case 'cancel':
        return (
          <MenuItem
            onClick={() => {
              setAnchorEl(null);
              onCancel();
            }}
            key={actionType}
          >
            {localeText.cancelButtonLabel}
          </MenuItem>
        );

      case 'accept':
        return (
          <MenuItem
            onClick={() => {
              setAnchorEl(null);
              onAccept();
            }}
            key={actionType}
          >
            {localeText.okButtonLabel}
          </MenuItem>
        );

      case 'today':
        return (
          <MenuItem
            data-mui-test="today-action-button"
            onClick={() => {
              setAnchorEl(null);
              onSetToday();
            }}
            key={actionType}
          >
            {localeText.todayButtonLabel}
          </MenuItem>
        );

      default:
        return null;
    }
  });

  return (
    <DialogActions>
      <Button
        id={`picker-actions-${id}`}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={(event) => setAnchorEl(event.currentTarget)}
      >
        Actions
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          'aria-labelledby': `picker-actions-${id}`,
        }}
      >
        {menuItems}
      </Menu>
    </DialogActions>
  );
}

export default function ActionBarComponent({ date, setDate, busyDays }) {
  const renderDots = (day, selected, DayProps) => {
    const isVisit = busyDays
      .some((el) => new Date(el.date_of_receipt).toLocaleDateString() === day.toLocaleDateString());
    if (isVisit) {
      return (
        <PickersDay {...DayProps} style={styles.dayWithDotContainer}>
          {day.getDate()}
          <div style={styles.dayWithDot} />
        </PickersDay>
      );
    }
    return <PickersDay {...DayProps}>{day.getDate()}</PickersDay>;
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        onChange={(newValue) => setDate(newValue)}
        renderDay={renderDots}
        value={date}
        renderInput={(params) => <TextField {...params} />}
        components={{
          ActionBar: CustomActionBar,
        }}
        componentsProps={{
          actionBar: {
            actions: ['today'],
          },
        }}
      />
    </LocalizationProvider>
  );
}
