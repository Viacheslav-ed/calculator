import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Button, ListItem, ListItemText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  buttons: {
    height: 56,
  },
});

const ButtonItemList = ({ text: { primary, secondary }, buttons }) => {
  const [value, setValue] = useState('750');
  const handleChange = e => setValue(e.target.textContent);
  console.log('b', value);
  const classes = useStyles();
  return (
    <ListItem className={classes.buttons}>
      <ListItemText primary={primary} secondary={secondary} />
      <ButtonGroup color="primary">
        {buttons.map(button => (
          <Button
            key={button}
            variant={button === value ? 'contained' : null}
            onClick={handleChange}
          >
            {button}
          </Button>
        ))}
      </ButtonGroup>
    </ListItem>
  );
};

ButtonItemList.propTypes = {
  text: PropTypes.objectOf(PropTypes.string).isRequired,
  buttons: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ButtonItemList;
