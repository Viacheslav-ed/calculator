const getTaxesFromPostal = postal => {
  return postal
    .split('')
    .map(num => `${num * 11}%`)
    .join(' ');
};

export default getTaxesFromPostal;
