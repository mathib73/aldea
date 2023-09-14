import React from 'react';

import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import globalStyles from '../../assets/stylesheets/globalStyles.module.scss';

const Paragraph = (props) => {
  const { paragraph, className } = props;
  return (
    <Typography
      className={[className, globalStyles.paragraph].join(' ')}
    >
      {paragraph}
    </Typography>
  );
};

Paragraph.propTypes = {
  paragraph: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export { Paragraph };
