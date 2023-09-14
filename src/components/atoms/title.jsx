import React from 'react';

import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import globalStyles from '../../assets/stylesheets/globalStyles.module.scss';

const Title = (props) => {
  const { title, className } = props;
  return (
    <Typography
      className={[globalStyles.title, className].join(' ')}
    >
      {title}
    </Typography>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export { Title };
