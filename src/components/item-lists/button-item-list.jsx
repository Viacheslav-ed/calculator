import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Button, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import { buttons, itemListLabels } from '../../utils/config';
import { useStateContext } from '../../hooks/context';

const useStyles = makeStyles({
  buttons: {
    height: 56,
  },
});

const ButtonItemList = ({ name }) => {
  const { state } = useStateContext();
  const [value, setValue] = useState(state.inputValues[name]);
  const handleChange = e => setValue(e.target.textContent);
  console.log('b', value);
  const classes = useStyles();
  return (
    <ListItem className={classes.buttons}>
      <ListItemText primary={itemListLabels[name]} />
      <ButtonGroup color="primary">
        {buttons[name].map(button => (
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
  name: PropTypes.string.isRequired,
};

export default ButtonItemList;
