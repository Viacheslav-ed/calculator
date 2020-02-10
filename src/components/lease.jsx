import React from 'react';
import { List, makeStyles, ListItem, ListItemText, TextField, MenuItem } from '@material-ui/core';

const useStyle = makeStyles({
  value: {
    // textAlign: 'right',
  },
});

const Lease = () => {
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
          <ListItemText primary="Post Code" />
          <TextField size="small" variant="outlined" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Terms" />
          <TextField
            // id="outlined-select-currency"
            select
            size="small"
            // label="222222"
            // value={3}
            // onChange={handleChange}
            // helperText="Please select your currency"
            variant="outlined"
          >
            <MenuItem value="1111">1111111</MenuItem>
            <MenuItem value="2222">2222222</MenuItem>
            <MenuItem value="3333">3333333</MenuItem>
            <MenuItem value="4444">4444444</MenuItem>
          </TextField>
        </ListItem>
        <ListItem>
          <ListItemText primary="Mileages" />
          <TextField
            // id="outlined-select-currency"
            select
            size="small"
            // label="222222"
            // value={3}
            // onChange={handleChange}
            // helperText="Please select your currency"
            variant="outlined"
          >
            <MenuItem value="1111">1111111</MenuItem>
            <MenuItem value="2222">2222222</MenuItem>
            <MenuItem value="3333">3333333</MenuItem>
            <MenuItem value="4444">4444444</MenuItem>
          </TextField>
        </ListItem>
        <ListItem>
          <ListItemText primary="Credit Score" />
          <TextField
            // id="outlined-select-currency"
            select
            size="small"
            // label="222222"
            // value={3}
            // onChange={handleChange}
            // helperText="Please select your currency"
            variant="outlined"
          >
            <MenuItem value="1111">1111111</MenuItem>
            <MenuItem value="2222">2222222</MenuItem>
            <MenuItem value="3333">3333333</MenuItem>
            <MenuItem value="4444">4444444</MenuItem>
          </TextField>
        </ListItem>
      </List>
    </>
  );
};

export default Lease;
