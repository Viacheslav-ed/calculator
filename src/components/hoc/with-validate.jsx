import React, { useState } from 'react';

const withValidate = WrappedComponent => {
  return props => {
    const [value, setValue] = useState('0');
    const handleChange = e => setValue(e.target.value);
    console.log('value', value);
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <WrappedComponent {...props} value={value} handleChange={handleChange} setValue={setValue} />
    );
  };
};

export default withValidate;
