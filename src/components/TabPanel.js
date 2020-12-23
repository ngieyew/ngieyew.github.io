import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';

const TabPanel = (props) => {
  const { children, value, index } = props;

  return <Paper width="100%">{value === index && <Paper p={3}>{children}</Paper>}</Paper>;
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default TabPanel;
