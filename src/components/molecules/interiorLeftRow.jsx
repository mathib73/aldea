import React from 'react';
import PropTypes from 'prop-types';

import { Button, Typography } from '@mui/material';
import classes from './interiorLeftRow.module.scss';

const InteriorLeftRow = (props) => {
  const {
    selectedId, idRubro, customClass,
    title, changeRubro, listNumber,
    isResult, open,
  } = props;

  let buttonClass = (selectedId !== idRubro)
    ? classes.nonSelectedButton
    : classes.selectedButton;
  let textClass = selectedId !== idRubro
    ? classes.nonSelectedText
    : classes.selectedText;
  if (isResult) {
    buttonClass = open ? classes.selectedButton : classes.nonSelectedButton;
    textClass = open ? classes.selectedText : classes.nonSelectedText;
  }
  return (
    <Button className={[buttonClass, customClass].join(' ')} onClick={() => changeRubro(idRubro)}>
      <Typography className={textClass}>
        {`${listNumber}. ${title}`}
      </Typography>
    </Button>
  );
};

InteriorLeftRow.defaultProps = {
  customClass: '',
  isResult: false,
  open: false,
};
InteriorLeftRow.propTypes = {
  title: PropTypes.string.isRequired,
  idRubro: PropTypes.string.isRequired,
  selectedId: PropTypes.string.isRequired,
  changeRubro: PropTypes.func.isRequired,
  listNumber: PropTypes.string.isRequired,
  customClass: PropTypes.string,
  isResult: PropTypes.bool,
  open: PropTypes.bool,
};

export { InteriorLeftRow };
