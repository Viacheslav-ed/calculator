import React from 'react';
import PropTypes from 'prop-types';
import { Paper, List, Divider } from '@material-ui/core';
import { TextItemList } from './item-lists';

const InfoCard = ({ data, isLoan, result }) => {
  const { msrp, vehicle, dealerName, dealerPhone, dealerRating, taxes } = data;
  return (
    <>
      <Paper>
        <List>
          <TextItemList text={{ primary: 'MSRP' }} value={msrp} />
          <TextItemList text={{ primary: vehicle.name, secondary: vehicle.info }} value="" />
          <Divider />
          <TextItemList
            text={{ primary: `Est. ${isLoan ? 'Loan' : 'Lease'} Payment` }}
            value={isLoan ? result.loan : result.lease}
          />
          <TextItemList text={{ primary: 'Taxes' }} value={taxes} />
          <Divider />
          <TextItemList text={{ primary: dealerName }} value="" />
          <TextItemList text={{ primary: 'Phone' }} value={dealerPhone} />
          <TextItemList text={{ primary: 'Rating' }} value={dealerRating} />
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
