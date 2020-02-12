import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Button, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import { buttons, itemListLabels } from '../../utils/config';
import { useStateContext } from '../../hooks/context';
import calculate from '../../services/calculation-service';

const useStyles = makeStyles({
  buttons: {
    height: 56,
  },
});

const ButtonItemList = ({ name }) => {
  const { state, dispatch } = useStateContext();
  const handleChange = e => {
    if (state.inputValues[name] === e.target.textContent) return;
    const { inputValues } = state;
    inputValues[name] = e.target.textContent;
    dispatch({ type: 'UPDATE_INPUT_VALUES', inputValues });
    calculate(state).then(result => dispatch({ type: 'UPDATE_RESULT', result }));
  };
  const classes = useStyles();
  return (
    <ListItem className={classes.buttons}>
      <ListItemText primary={itemListLabels[name]} />
      <ButtonGroup color="primary">
        {buttons[name].map(button => (
          <Button
            key={button}
            variant={button === state.inputValues[name] ? 'contained' : null}
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
