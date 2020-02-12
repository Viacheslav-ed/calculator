import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, TextField, InputAdornment, makeStyles } from '@material-ui/core';
import { useStateContext } from '../../hooks/context';
import { itemListMasks, itemListLabels } from '../../utils/config';
import getTaxesFromPostal from '../../utils/getTaxes';
import calculate from '../../services/calculation-service';

const useStyle = makeStyles({
  input: {
    width: 160,
  },
});

const dollarMask = { startAdornment: <InputAdornment position="start">$</InputAdornment> };
const percentMask = { endAdornment: <InputAdornment position="end">%</InputAdornment> };

const InputItemList = ({ name }) => {
  const { state, dispatch } = useStateContext();
  const [value, setValue] = useState(state.inputValues[name]);
  const handleChange = e => {
    const newValue = e.target.value;
    if (!Number.isFinite(Number(newValue)) || Number(newValue) < 0 || newValue === value) return;
    setValue(newValue);
  };
  const updateInputLabels = newValue => {
    if (newValue === state.inputValues[name]) return;
    const { inputValues } = state;
    inputValues[name] = newValue;
    dispatch({ type: 'UPDATE_INPUT_VALUES', inputValues });
    if (name === 'postal') dispatch({ type: 'UPDATE_TAXES', taxes: getTaxesFromPostal(newValue) });
    calculate(state).then(result => dispatch({ type: 'UPDATE_RESULT', result }));
  };
  const hendleKeyPressed = (e, newValue) => {
    if (e.key === 'Enter') updateInputLabels(newValue);
  };
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
        onBlur={() => updateInputLabels(value)}
        onKeyPress={e => hendleKeyPressed(e, value)}
      />
    </ListItem>
  );
};

InputItemList.propTypes = {
  name: PropTypes.string.isRequired,
};

export default InputItemList;
