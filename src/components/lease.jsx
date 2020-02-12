import React from 'react';
import { List } from '@material-ui/core';
import { InputItemList, SelectItemList } from './item-lists';

const Lease = () => {
  return (
    <>
      <List>
        <InputItemList name="downPayment" />
        <InputItemList name="tradeIn" />
        <InputItemList name="postal" />
        <SelectItemList name="termsLease" />
        <SelectItemList name="mileage" />
        <SelectItemList name="creditScoreValue" />
      </List>
    </>
  );
};

export default Lease;
