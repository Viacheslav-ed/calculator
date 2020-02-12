import React, { useEffect } from 'react';
import { Paper, Tabs, Tab, Divider } from '@material-ui/core';
import Loan from './loan';
import Lease from './lease';
import { useStateContext } from '../hooks/context';
import calculate from '../services/calculation-service';

const Calculator = () => {
  const { state, dispatch } = useStateContext();
  const handleChange = (e, newType) => {
    if (newType === state.typeCalculator) return;
    dispatch({ type: 'CHANGE_TYPE_CALCULATOR', newType });
  };
  useEffect(() => {
    calculate(state).then(result => dispatch({ type: 'UPDATE_RESULT', result }));
  }, []);
  return (
    <Paper>
      <Tabs
        value={state.typeCalculator || 0}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        onChange={handleChange}
      >
        <Tab label="Loan" />
        <Tab label="Lease" />
      </Tabs>
      <Divider />
      {state.typeCalculator ? <Lease /> : <Loan />}
    </Paper>
  );
};

export default Calculator;
