import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, TextField, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  input: {
    width: 160,
  },
});

const SelectItemList = ({ text: { primary, secondary }, options }) => {
  const [value, setValue] = useState('36');
  const handleChange = e => setValue(e.target.value);
  console.log('s', value);
  const classes = useStyle();
  return (
    <ListItem>
      <ListItemText primary={primary} secondary={secondary} />
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
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </TextField>
    </ListItem>
  );
};

SelectItemList.propTypes = {
  text: PropTypes.objectOf(PropTypes.string).isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectItemList;
