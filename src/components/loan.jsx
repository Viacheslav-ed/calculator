import React from 'react';
import {
  List,
  makeStyles,
  ListItem,
  ListItemText,
  TextField,
  Button,
  ButtonGroup,
} from '@material-ui/core';

const useStyle = makeStyles({
  value: {
    // textAlign: 'right',
  },
});

const Loan = () => {
  const styles = useStyle();

  return (
    <>
      <List>
        <ListItem>
          <ListItemText className={styles.value} primary="Down Payment" />
          <TextField size="small" variant="outlined" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Trade-In" />
          <TextField size="small" variant="outlined" />
        </ListItem>
        <ListItem>
          <ListItemText primary="APR" />
          <TextField size="small" variant="outlined" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Post Code" />
          <TextField size="small" variant="outlined" />
        </ListItem>
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
