import React, { useReducer, useEffect } from 'react';
import { CssBaseline, Box, makeStyles } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import Calculator from './calculator';
import InfoCard from './info-card';
import getData from '../services/data-service';
import mainReducer from '../reducers/main-reducer';
import { initialMainState } from '../utils/config';
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
  const classes = useStyles();
  const [state, dispatch] = useReducer(mainReducer, initialMainState);

  const changeTypeCalc = () => dispatch({ type: 'CHANGE_TYPE_CULC' });
  const updateResult = result => dispatch({ type: 'UPDATE_RESULT', result });

  useEffect(() => {
    getData().then(data => dispatch({ type: 'LOADED', data }));
  }, []);

  return (
    <>
      <CssBaseline />
      <Box className={classes.wrapper}>
        {state.isLoading ? <Spiner text="LOADING" /> : null}
        <Box className={state.isLoading ? classes.mainBoxInactive : classes.mainBox}>
          <Box className={classes.calculator}>
            <Calculator
              isLoan={state.isLoan}
              changeTypeCalc={changeTypeCalc}
              updateResult={updateResult}
            />
          </Box>
          <Box className={classes.infoCard}>
            <InfoCard data={state.data} isLoan={state.isLoan} result={state.resultCalculation} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default App;
