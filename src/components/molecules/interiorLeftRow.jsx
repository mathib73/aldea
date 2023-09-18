import React from 'react';
import PropTypes from 'prop-types';

import { Button, Typography } from '@mui/material';
import classes from './interiorLeftRow.module.scss';

const InteriorLeftRow = (props) => {
  const {
    selectedId, idRubro,
    title, changeRubro, listNumber,
  } = props;

  const buttonClass = (selectedId !== idRubro)
    ? classes.nonSelectedButton
    : classes.selectedButton;
  const textClass = selectedId !== idRubro
    ? classes.nonSelectedText
    : classes.selectedText;
  return (
    <Button className={buttonClass} onClick={() => changeRubro(idRubro)}>
      <Typography className={textClass}>
        {`${listNumber}. ${title}`}
      </Typography>
    </Button>
  );
};

InteriorLeftRow.propTypes = {
  title: PropTypes.string.isRequired,
  idRubro: PropTypes.string.isRequired,
  selectedId: PropTypes.string.isRequired,
  changeRubro: PropTypes.func.isRequired,
  listNumber: PropTypes.string.isRequired,
};

export { InteriorLeftRow };
