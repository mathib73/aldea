import React from 'react';

import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

import classes from './resultRow.module.scss';

const ResultRow = (props) => {
  const {
    title, text,
    isMoney, currency,
  } = props;
  return (
    <div className={classes.leftResultRow}>
      <Typography className={classes.leftTitle}>
        {title}
      </Typography>
      {isMoney
      && (
      <div className={classes.leftNumberDiv}>
        <Typography className={classes.leftCurrency}>
          {currency}
        </Typography>
        <Typography className={classes.leftNumber}>
          {Intl.NumberFormat('en-US').format(text)}
        </Typography>
      </div>
      )}
      {!isMoney
        && (
          <div className={classes.leftNumberDiv}>
            <Typography className={classes.leftNumber}>
              {text}
            </Typography>
          </div>
        )}
    </div>
  );
};

ResultRow.defaultProps = {
  currency: '',
  isMoney: false,
};
ResultRow.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isMoney: PropTypes.bool,
  currency: PropTypes.string,
};

export { ResultRow };
