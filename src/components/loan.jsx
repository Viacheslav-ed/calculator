import React from 'react';
import { List } from '@material-ui/core';
import { InputItemList, ButtonItemList } from './item-lists';
import { TERMS, CREDIT_SCORE } from '../utils/config';

const Loan = () => {
  return (
    <>
      <List>
        <InputItemList text={{ primary: 'Down Payment' }} mask="dollar" />
        <InputItemList text={{ primary: 'Trade-In' }} mask="dollar" />
        <InputItemList text={{ primary: 'APR' }} mask="percent" />
        <InputItemList text={{ primary: 'Post Code' }} mask="" />
        <ButtonItemList text={{ primary: 'Terms' }} buttons={TERMS} />
        <ButtonItemList text={{ primary: 'Credit Score' }} buttons={CREDIT_SCORE} />
      </List>
    </>
  );
};

export default Loan;
