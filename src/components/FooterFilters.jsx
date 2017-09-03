import React from 'react';
import PropTypes from 'prop-types';

import All from './All';
import Completed from './Completed';
import Incomplete from './Incomplete';
import HighPriority from './HighPriority';
import MidPriority from './MidPriority';
import LowPriority from './LowPriority';

const FooterFilters = ({ handleFilter }) => (
  <div id="footerFilters">
    Filter by:
    <All handleFilter={handleFilter} />
    <Completed handleFilter={handleFilter} />
    <Incomplete handleFilter={handleFilter} />
    <HighPriority handleFilter={handleFilter} />
    <MidPriority handleFilter={handleFilter} />
    <LowPriority handleFilter={handleFilter} />
  </div>
);

FooterFilters.propTypes = {
  handleFilter: PropTypes.func.isRequired
};

export default FooterFilters;
