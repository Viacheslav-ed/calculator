import React, { useReducer, useEffect } from 'react';
import { CssBaseline, Box, makeStyles } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import Calculator from './calculator';
import InfoCard from './info-card';
import getData from '../services/data-service';
import mainReducer from '../reducers/main-reducer';
import initialState from '../reducers/initState';
import Spiner from './spiner';

const useStyles = makeStyles({
  wrapper: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainBox: {
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainBoxInactive: {
    maxWidth: '1200px',
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
  const clases = useStyles();
  const [state, dispatch] = useReducer(mainReducer, initialState);

  useEffect(() => {
    getData().then(data => dispatch({ type: 'loaded', data }));
    console.log('state', state);
  }, []);

  return (
    <>
      <CssBaseline />
      <Box className={clases.wrapper}>
        {state.isLoaded ? <Spiner text="LOADING" /> : null}
        <Box className={state.isLoaded ? clases.mainBoxInactive : clases.mainBox}>
          <Box className={clases.calculator}>
            <Calculator />
          </Box>
          <Box className={clases.infoCard}>
            <InfoCard />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default App;
