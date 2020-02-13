import React from 'react';
import { Paper, List, Divider } from '@material-ui/core';
import { TextItemList } from './item-lists';

const InfoCard = () => {
  return (
    <>
      <Paper>
        <List>
          <TextItemList name="vehicle" />
          <TextItemList name="msrp" />
          <Divider />
          <TextItemList name="payment" />
          <TextItemList name="taxes" />
          <Divider />
          <TextItemList name="dealerName" />
          <TextItemList name="dealerPhone" />
          <TextItemList name="dealerRating" />
        </List>
      </Paper>
    </>
  );
};

export default InfoCard;
