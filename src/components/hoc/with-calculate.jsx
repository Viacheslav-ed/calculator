import React from 'react';

const withCalculate = WrappedComponent => {
  // const [value, setValue] = useState('0');
  // const handleChange = newValue => setValue(newValue);
  return props => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <WrappedComponent {...props} />;
  };
};
export default withCalculate;
