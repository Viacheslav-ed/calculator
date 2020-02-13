import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, makeStyles } from '@material-ui/core';
import { useStateContext } from '../../hooks/context';
import { itemListLabels } from '../../utils/config';

const useStyle = makeStyles({
  right: {
    textAlign: 'right',
  },
  center: {
    textAlign: 'center',
  },
});

const TextItemList = ({ name }) => {
  const { state } = useStateContext();
  const infoCardData = { ...state.data, taxes: state.taxes, payment: state.payment };
  const classes = useStyle();
  return (
    <ListItem>
      {itemListLabels[name] ? <ListItemText primary={itemListLabels[name]} /> : null}
      <ListItemText
        className={itemListLabels[name] ? classes.right : classes.center}
        primary={infoCardData[name]}
      />
    </ListItem>
  );
};

TextItemList.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TextItemList;
