import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, TextField, InputAdornment, makeStyles } from '@material-ui/core';
import { useStateContext } from '../../hooks/context';
import { itemListMasks, itemListLabels } from '../../utils/config';

const useStyle = makeStyles({
  input: {
    width: 160,
  },
});

const dollarMask = { startAdornment: <InputAdornment position="start">$</InputAdornment> };
const percentMask = { endAdornment: <InputAdornment position="end">%</InputAdornment> };

const InputItemList = ({ name }) => {
  const { state } = useStateContext();
  const loanData = { ...state.inputValues, postal: state.postal };
  const [value, setValue] = useState(loanData[name]);
  const handleChange = e => setValue(e.target.value);
  console.log('i', value);
  const classes = useStyle();
  const inputMask = itemListMasks[name] === 'dollar' ? dollarMask : percentMask;
  return (
    <ListItem>
      <ListItemText primary={itemListLabels[name]} />
      <TextField
        size="small"
        className={classes.input}
        variant="outlined"
        InputProps={itemListMasks[name] ? inputMask : null}
        value={value}
        onChange={handleChange}
      />
    </ListItem>
  );
};

InputItemList.propTypes = {
  name: PropTypes.string.isRequired,
};

export default InputItemList;
