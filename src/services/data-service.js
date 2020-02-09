import fakeData from './data';
import { tokenIpInfo, corsProxy } from '../utils/constants';
import getTaxes from '../utils/getTaxes';

const dataPromised = new Promise(resolve => {
  setTimeout(() => {
    resolve(fakeData);
  }, 1000);
});

const getPostal = async () => {
  const res = await fetch(`${corsProxy}https://ipinfo.io?token=${tokenIpInfo}`);
  const json = await res.json();
  return json.postal;
};

const getData = async () => {
  const data = await dataPromised;
  // const postal = await getPostal();
  data.taxes = getTaxes(await getPostal());
  return data;
};

export default getData;
