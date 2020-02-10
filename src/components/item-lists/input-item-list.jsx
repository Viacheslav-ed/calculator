import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, TextField, InputAdornment, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  input: {
    width: 160,
  },
});

const dollarMask = { startAdornment: <InputAdornment position="start">$</InputAdornment> };
const percentMask = { endAdornment: <InputAdornment position="end">%</InputAdornment> };

const InputItemList = ({ text: { primary, secondary }, mask = null }) => {
  const classes = useStyle();
  const inputMask = mask === 'dollar' ? dollarMask : percentMask;
  return (
    <ListItem>
      <ListItemText primary={primary} secondary={secondary} />
      <TextField
        size="small"
        className={classes.input}
        variant="outlined"
        InputProps={mask ? inputMask : null}
      />
    </ListItem>
  );
};

InputItemList.propTypes = {
  text: PropTypes.objectOf(PropTypes.string).isRequired,
  mask: PropTypes.string.isRequired,
};

export default InputItemList;
