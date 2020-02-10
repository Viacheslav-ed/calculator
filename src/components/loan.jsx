import React from 'react';
import { List, ListItem, ListItemText, Button, ButtonGroup } from '@material-ui/core';
import { InputItemList } from './item-lists';

const Loan = () => {
  return (
    <>
      <List>
        <InputItemList text={{ primary: 'Down Payment' }} mask="dollar" />
        <InputItemList text={{ primary: 'Trade-In' }} mask="dollar" />
        <InputItemList text={{ primary: 'APR' }} mask="percent" />
        <InputItemList text={{ primary: 'Post Code' }} />
        <ListItem>
          <ListItemText primary="Terms" />
          <ButtonGroup color="primary">
            <Button>12</Button>
            <Button>24</Button>
            <Button>36</Button>
            <Button>48</Button>
            <Button>72</Button>
            <Button>84</Button>
          </ButtonGroup>
        </ListItem>
        <ListItem>
          <ListItemText primary="Credit Score" />
          <ButtonGroup color="primary">
            <Button>600</Button>
            <Button>650</Button>
            <Button>700</Button>
            <Button>750</Button>
            <Button>800</Button>
            <Button>850</Button>
            <Button>900</Button>
          </ButtonGroup>
        </ListItem>
      </List>
    </>
  );
};

export default Loan;
