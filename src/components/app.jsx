import React, { useReducer, useEffect } from 'react';
import { CssBaseline, Box, makeStyles } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import Calculator from './calculator';
import InfoCard from './info-card';
import getData from '../services/data-service';
import mainReducer from '../reducers/main-reducer';
import initialState from '../reducers/initState';
import Spiner from './spiner';
import calculate from '../services/calculation-service';

const useStyles = makeStyles({
  wrapper: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainBox: {
    minWidth: '900px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainBoxInactive: {
    minWidth: '900px',
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
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const changeTypeCalc = () => dispatch({ type: 'CHANGE_TYPE_CULC' });
  const updateResult = result => dispatch({ type: 'UPDATE_RESULT', result });

  useEffect(() => {
    getData().then(data => dispatch({ type: 'LOADED', data }));
    calculate().then(i => console.log(i));
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
