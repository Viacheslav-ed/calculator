import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Button, ListItem, ListItemText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  buttons: {
    height: 56,
  },
});

const ButtonItemList = ({ text: { primary, secondary }, buttons }) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.buttons}>
      <ListItemText primary={primary} secondary={secondary} />
      <ButtonGroup color="primary">
        {buttons.map(button => (
          <Button key={button}>{button}</Button>
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
