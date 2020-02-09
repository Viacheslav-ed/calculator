import data from './data';

const promise = new Promise(resolve => {
  setTimeout(() => {
    resolve(data);
  }, 11500);
});

const getData = async () => {
  const res = await promise;
  return res;
};

export default getData;
