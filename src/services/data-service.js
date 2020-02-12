import fakeData from './fake-data';
import { tokenIpInfo, corsProxy } from '../utils/config';

const getPostal = async () => {
  const res = await fetch(`${corsProxy}https://ipinfo.io?token=${tokenIpInfo}`);
  const json = await res.json();
  return json.postal;
};

const getData = async () => {
  const data = await Promise.resolve(fakeData);
  return data;
};

export { getData, getPostal };
