import React from 'react';

import PropTypes from 'prop-types';

import { Button, Typography } from '@mui/material';
import classes from './exteriorRow.module.scss';

const ExteriorRow = (props) => {
  const {
    title, desc, selectedId, id,
    setExternal, imgMuestra,
  } = props;

  return (
    <Button className={classes.button} onClick={setExternal} autoFocus={selectedId === id}>
      <img src={imgMuestra} alt={title} className={classes.img} />
      <div className={classes.textDiv}>
        <Typography className={classes.title}>
          {title}
        </Typography>
        <Typography className={classes.desc}>
          {desc}
        </Typography>
        {selectedId === id
        && (
          <div className={classes.selectedDiv}>
            <Typography className={classes.selectedText}>
              Seleccionada
            </Typography>
          </div>
        )}
      </div>
    </Button>
  );
};

ExteriorRow.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  imgMuestra: PropTypes.any.isRequired,
  setExternal: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  selectedId: PropTypes.number.isRequired,
};

export { ExteriorRow };
