import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, TextField, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  input: {
    width: 160,
  },
});

// const dollarMask = { startAdornment: <InputAdornment position="start">$</InputAdornment> };
// const percentMask = { endAdornment: <InputAdornment position="end">%</InputAdornment> };

const SelectItemList = ({ text: { primary, secondary }, options }) => {
  const classes = useStyle();
  // const inputMask = mask === 'dollar' ? dollarMask : percentMask;
  return (
    <ListItem>
      <ListItemText primary={primary} secondary={secondary} />
      <TextField
        select
        size="small"
        className={classes.input}
        variant="outlined"
        id="33dfhbxdfbnfmcghm"
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
    </ListItem>
  );
};

SelectItemList.propTypes = {
  text: PropTypes.objectOf(PropTypes.string).isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  // mask: PropTypes.string.isRequired,
};

export default SelectItemList;
