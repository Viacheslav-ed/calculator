import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, TextField, makeStyles } from '@material-ui/core';
import { itemListLabels, buttons } from '../../utils/config';
import { useStateContext } from '../../hooks/context';

const useStyle = makeStyles({
  input: {
    width: 160,
  },
});

const SelectItemList = ({ name }) => {
  const { state } = useStateContext();
  const [value, setValue] = useState(state.inputValues[name]);
  const handleChange = e => setValue(e.target.value);
  console.log('s', value);
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
        value={value}
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
