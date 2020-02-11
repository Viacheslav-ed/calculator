import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, TextField, InputAdornment, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  input: {
    width: 160,
  },
});

const dollarMask = { startAdornment: <InputAdornment position="start">$</InputAdornment> };
const percentMask = { endAdornment: <InputAdornment position="end">%</InputAdornment> };

const InputItemList = ({ text: { primary, secondary }, mask }) => {
  const [value, setValue] = useState('0');
  const handleChange = e => setValue(e.target.value);
  console.log('i', value);
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
        value={value}
        onChange={handleChange}
      />
    </ListItem>
  );
};

InputItemList.propTypes = {
  text: PropTypes.objectOf(PropTypes.string).isRequired,
  mask: PropTypes.string.isRequired,
  // value: PropTypes.string.isRequired,
  // handleChange: PropTypes.func.isRequired,
};

export default InputItemList;
