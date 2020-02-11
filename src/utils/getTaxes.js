const getTaxes = postal => {
  return postal
    .split('')
    .map(num => `${num * 11}%`)
    .join(' ');
};

export default getTaxes;
