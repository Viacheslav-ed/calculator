import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, Box, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  spiner: {
    position: 'absolute',
    width: '100%',
    height: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  text: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
});

const Spiner = ({ text }) => {
  const clases = useStyle();

  return (
    <Box className={clases.spiner}>
      <CircularProgress />
      <span className={clases.text}>{text}</span>
    </Box>
  );
};

Spiner.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Spiner;
