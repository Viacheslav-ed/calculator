import React from 'react';
import { List } from '@material-ui/core';
import { InputItemList, ButtonItemList } from './item-lists';

const Loan = () => {
  return (
    <>
      <List>
        <InputItemList text={{ primary: 'Down Payment' }} mask="dollar" />
        <InputItemList text={{ primary: 'Trade-In' }} mask="dollar" />
        <InputItemList text={{ primary: 'APR' }} mask="percent" />
        <InputItemList text={{ primary: 'Post Code' }} />
        <ButtonItemList text={{ primary: 'Terms' }} buttons={[12, 24, 36, 48, 72, 84]} />
        <ButtonItemList
          text={{ primary: 'Credit Score' }}
          buttons={[600, 650, 700, 750, 800, 850, 900]}
        />
      </List>
    </>
  );
};

export default Loan;
