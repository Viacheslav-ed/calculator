import React from 'react';
import PropTypes from 'prop-types';
import { Paper, List, makeStyles, ListItem, ListItemText, Divider } from '@material-ui/core';

const useStyle = makeStyles({
  value: {
    textAlign: 'right',
  },
});

const InfoCard = ({
  data: { msrp, vehicle, dealerName, dealerPhone, dealerRating, taxes },
  isLoan,
  result,
}) => {
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
            <ListItemText primary={vehicle.name} secondary={vehicle.info} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary={`Est. ${isLoan ? 'Loan' : 'Lease'} Payment`} />
            <ListItemText className={styles.value} primary={isLoan ? result.loan : result.lease} />
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

InfoCard.propTypes = {
  data: PropTypes.shape({
    msrp: PropTypes.string,
    vehicle: PropTypes.objectOf(PropTypes.string),
    dealerName: PropTypes.string,
    dealerPhone: PropTypes.string,
    dealerRating: PropTypes.string,
    taxes: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  isLoan: PropTypes.bool.isRequired,
  result: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default InfoCard;
