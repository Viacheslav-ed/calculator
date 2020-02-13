import React from 'react';
import { List } from '@material-ui/core';
import { InputItemList, ButtonItemList } from './item-lists';

const Loan = () => {
  return (
    <>
      <List>
        <InputItemList name="downPayment" />
        <InputItemList name="tradeIn" />
        <InputItemList name="apr" />
        <InputItemList name="postal" />
        <ButtonItemList name="termsLoan" />
        <ButtonItemList name="creditScoreValue" />
      </List>
    </>
  );
};

export default Loan;
