import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Tabs, Tab, Divider } from '@material-ui/core';
import Loan from './loan';
import Lease from './lease';

const Calculator = ({ isLoan, changeTypeCalc }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    if (newValue === value) return;
    setValue(newValue);
    changeTypeCalc();
  };

  return (
    <Paper>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        onChange={handleChange}
      >
        <Tab label="Loan" />
        <Tab label="Lease" />
      </Tabs>
      <Divider />
      {isLoan ? <Loan /> : <Lease />}
    </Paper>
  );
};

Calculator.propTypes = {
  isLoan: PropTypes.bool.isRequired,
  changeTypeCalc: PropTypes.func.isRequired,
};

export default Calculator;
