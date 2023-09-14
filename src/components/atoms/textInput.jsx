import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import globalStyles from '../../assets/stylesheets/globalStyles.module.scss';

const TextInput = (props) => {
  const { label, className, error } = props;
  return (
    <TextField
      error={error}
      label={label}
      className={[globalStyles.textField, className].join(' ')}
      variant="filled"
      fullWidth
    />
  );
};

TextInput.propTypes = {
  error: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.object.isRequired,
};

export { TextInput };
