import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Paper, Tabs, Tab, Divider } from '@material-ui/core';
import Loan from './loan';
import Lease from './lease';
import { initialInputState } from '../utils/config';

const Calculator = ({ isLoan, changeTypeCalc }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    if (newValue === value) return;
    setValue(newValue);
    changeTypeCalc();
  };
  const [inputState, setInputState] = useState(initialInputState);
  const updateInputState = inputValue => setInputState({ ...inputState, inputValue });
  const log = inputValue => console.log(inputValue);
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
      {isLoan ? (
        <Loan inputState={inputState} updateInputState={updateInputState} log={log} />
      ) : (
        <Lease inputState={inputState} updateInputState={updateInputState} log={log} />
      )}
    </Paper>
  );
};

Calculator.propTypes = {
  isLoan: PropTypes.bool.isRequired,
  changeTypeCalc: PropTypes.func.isRequired,
};

export default Calculator;
