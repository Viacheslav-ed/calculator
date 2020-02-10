import fakeData from './fake-data';
import { tokenIpInfo, corsProxy } from '../utils/constants';
import getTaxes from '../utils/getTaxes';

const dataPromised = Promise.resolve(fakeData);

const getPostal = async () => {
  const res = await fetch(`${corsProxy}https://ipinfo.io?token=${tokenIpInfo}`);
  const json = await res.json();
  return json.postal;
};

const getData = async () => {
  const data = await dataPromised;
  data.taxes = getTaxes(await getPostal());
  return data;
};

export default getData;
