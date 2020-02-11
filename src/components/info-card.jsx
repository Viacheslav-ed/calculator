import React from 'react';
import PropTypes from 'prop-types';
import { Paper, List, Divider } from '@material-ui/core';
import { TextItemList } from './item-lists';
import getTaxes from '../utils/getTaxes';

const InfoCard = ({ data, isLoan, result }) => {
  const { msrp, vehicle, dealerName, dealerPhone, dealerRating, postal } = data;
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
          <TextItemList text={{ primary: 'Taxes' }} value={getTaxes(postal)} />
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
    postal: PropTypes.string.isRequired,
  }).isRequired,
  isLoan: PropTypes.bool.isRequired,
  result: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default InfoCard;
