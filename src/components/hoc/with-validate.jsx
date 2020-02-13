import React, { useState } from 'react';

const withValidate = WrappedComponent => {
  return props => {
    const [value, setValue] = useState('0');
    const handleChange = e => setValue(e.target.value);
    return (
      // <WrappedComponent {...props} value={value} handleChange={handleChange} setValue={setValue} />
    );
  };
};

export default withValidate;
