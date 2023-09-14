import * as React from 'react';
import PropTypes from 'prop-types';
import { TextField, inputLabelClasses } from '@mui/material';
import classes from './search.module.scss';

const Search = (props) => {
  const { filterText, setFilterText } = props;
  const changeText = (e) => {
    setFilterText(e.target.value);
  };
  return (
    <TextField
      variant="filled"
      label="Buscar..."
      className={classes.search}
      value={filterText}
      onChange={changeText}
      InputLabelProps={{
        sx: {
          fontFamily: 'Inter',
          fontWeight: 700,
          [`&.${inputLabelClasses.shrink}`]: {
            // set the color of the label when shrinked (usually when the TextField is focused)
            color: 'black',
          },
        },
      }}
    />
  );
};

Search.propTypes = {
  filterText: PropTypes.string.isRequired,
  setFilterText: PropTypes.func.isRequired,
};

export { Search };
