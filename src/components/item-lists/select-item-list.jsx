import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, TextField, makeStyles } from '@material-ui/core';
import { itemListLabels, buttons } from '../../utils/config';
import { useStateContext } from '../../hooks/context';
import calculate from '../../services/calculation-service';

const useStyle = makeStyles({
  input: {
    width: 160,
  },
});

const SelectItemList = ({ name }) => {
  const { state, dispatch } = useStateContext();
  const handleChange = e => {
    if (state.inputValues[name] === e.target.value) return;
    const { inputValues } = state;
    inputValues[name] = e.target.value;
    dispatch({ type: 'UPDATE_INPUT_VALUES', inputValues });
    calculate(state).then(result => dispatch({ type: 'UPDATE_RESULT', result }));
  };
  const classes = useStyle();
  return (
    <ListItem>
      <ListItemText primary={itemListLabels[name]} />
      <TextField
        select
        size="small"
        className={classes.input}
        variant="outlined"
        SelectProps={{
          native: true,
        }}
        onChange={handleChange}
        value={state.inputValues[name]}
      >
        {buttons[name].map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </TextField>
    </ListItem>
  );
};

SelectItemList.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SelectItemList;
