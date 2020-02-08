import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

const Calculator = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Loan" />
        <Tab label="Lease" />
      </Tabs>
    </Paper>
  );
};

export default Calculator;
