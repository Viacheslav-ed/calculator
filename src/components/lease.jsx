import React from 'react';
import { List } from '@material-ui/core';
import { InputItemList, SelectItemList } from './item-lists';
import { TERMS, MILEAGE, CREDIT_SCORE } from '../utils/config';

const Lease = () => {
  return (
    <>
      <List>
        <InputItemList text={{ primary: 'Down Payment' }} mask="dollar" />
        <InputItemList text={{ primary: 'Trade-In' }} mask="dollar" />
        <InputItemList text={{ primary: 'Post Code' }} mask="" />
        <SelectItemList text={{ primary: 'Terms' }} options={TERMS} />
        <SelectItemList text={{ primary: 'Mileages' }} options={MILEAGE} />
        <SelectItemList text={{ primary: 'Credit Store' }} options={CREDIT_SCORE} />
      </List>
    </>
  );
};

export default Lease;
