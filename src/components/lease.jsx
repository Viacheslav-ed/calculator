import React from 'react';
import { List } from '@material-ui/core';
import { InputItemList, SelectItemList } from './item-lists';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const Lease = () => {
  return (
    <>
      <List>
        <InputItemList text={{ primary: 'Down Payment' }} mask="dollar" />
        <InputItemList text={{ primary: 'Trade-In' }} mask="dollar" />
        <InputItemList text={{ primary: 'Post Code' }} />
        <SelectItemList text={{ primary: 'Terms' }} options={currencies} />
        <SelectItemList text={{ primary: 'Mileages' }} options={currencies} />
        <SelectItemList text={{ primary: 'Credit Store' }} options={currencies} />
      </List>
    </>
  );
};

export default Lease;
