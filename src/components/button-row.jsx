import React from 'react';
import { ButtonGroup, Button, makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const ButtonRow = () => {
  const clases = useStyles();

  return (
    <Box className={clases.root}>
      <ButtonGroup color="primary">
        <Button>639 or less</Button>
        <Button>36</Button>
      </ButtonGroup>
    </Box>
  );
};

export default ButtonRow;
