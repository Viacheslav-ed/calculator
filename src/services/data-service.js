import fakeData from './fake-data';
import { tokenIpInfo, corsProxy } from '../utils/constants';

const dataPromised = Promise.resolve(fakeData);

const getPostal = async () => {
  const res = await fetch(`${corsProxy}https://ipinfo.io?token=${tokenIpInfo}`);
  const json = await res.json();
  return json.postal;
};

const getData = async () => {
  const data = await dataPromised;
  data.postal = await getPostal();
  return data;
};

export default getData;
