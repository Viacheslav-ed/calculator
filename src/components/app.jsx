import React, { useEffect } from 'react';
import { CssBaseline, Box, makeStyles } from '@material-ui/core';
import Calculator from './calculator';
import InfoCard from './info-card';
import { getData, getPostal } from '../services/data-service';
import Spiner from './spiner';
import { useStateContext } from '../hooks/context';
import getTaxes from '../utils/getTaxes';

const useStyles = makeStyles({
  wrapper: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainBoxInactive: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: '0.3',
  },
  calculator: {
    flex: 2,
    marginRight: 20,
  },
  infoCard: {
    flex: 1,
  },
});

const App = () => {
  const { state, dispatch } = useStateContext();
  const classes = useStyles();
  useEffect(() => {
    getData().then(data => dispatch({ type: 'LOADED_DATA', data }));
    getPostal().then(postal =>
      dispatch({ type: 'LOADED_POSTAL', postal, taxes: getTaxes(postal) })
    );
  }, []);

  return (
    <>
      <CssBaseline />
      <Box className={classes.wrapper}>
        {state.isLoading ? <Spiner text="LOADING" /> : null}
        <Box className={state.isLoading ? classes.mainBoxInactive : classes.mainBox}>
          <Box className={classes.calculator}>
            <Calculator />
          </Box>
          <Box className={classes.infoCard}>
            <InfoCard />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default App;
