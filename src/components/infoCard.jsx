import React from 'react';
import { Paper, List, makeStyles, ListItem, ListItemText, Divider } from '@material-ui/core';

// const primaryOne = 'primary one';
// const primaryTwo = 'primary two';
// const secondaryOne = 'secondary one';
// const primaryOne = 'primary one';

const useStyle = makeStyles({
  value: {
    textAlign: 'right',
  },
});

const InfoCard = () => {
  const msrp = '$60363';
  const vehicleName = 'Toyota Corrola';
  const vehicleInfo = '2018 1.6l black';
  const peymentType = 'Loan';
  const paymentValue = '$658/mo';
  const taxes = '25%, 30%, 45%';
  const dealerName = "Magnussen's Toyota of Palo Alto (Palo Alto, CA)";
  const dealerPhone = '(855)977-2913';
  const dealerRating = '4,5';

  const styles = useStyle();

  return (
    <>
      <Paper>
        <List>
          <ListItem>
            <ListItemText primary="MSRP" />
            <ListItemText className={styles.value} primary={msrp} />
          </ListItem>
          <ListItem>
            <ListItemText primary={vehicleName} secondary={vehicleInfo} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary={`Est. ${peymentType} Payment`} />
            <ListItemText className={styles.value} primary={paymentValue} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Taxes" />
            <ListItemText className={styles.value} primary={taxes} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary={dealerName} />
            {/* <ListItemText className={styles.value} primary={taxes} /> */}
          </ListItem>
          <ListItem>
            <ListItemText primary={dealerPhone} />
            {/* <ListItemText className={styles.value} primary={taxes} /> */}
          </ListItem>
          <ListItem>
            <ListItemText primary="Rating" />
            <ListItemText className={styles.value} primary={dealerRating} />
          </ListItem>
        </List>
      </Paper>
    </>
  );
};

export default InfoCard;
