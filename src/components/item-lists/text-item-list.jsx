import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  value: {
    textAlign: 'right',
  },
});

const TextItemList = ({ text: { primary, secondary }, value = null }) => {
  const clases = useStyle();

  return (
    <ListItem>
      <ListItemText primary={primary} secondary={secondary} />
      {value ? <ListItemText className={clases.value} primary={value} /> : null}
    </ListItem>
  );
};

TextItemList.propTypes = {
  text: PropTypes.objectOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
};

export default TextItemList;
