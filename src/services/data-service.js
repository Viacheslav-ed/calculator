import data from './data';

const promise = new Promise(resolve => {
  setTimeout(() => {
    resolve(data);
  }, 500);
});

const getData = async () => {
  const res = await promise;
  return res;
};

export default getData;
