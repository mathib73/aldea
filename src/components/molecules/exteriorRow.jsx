import React from 'react';

import PropTypes from 'prop-types';

import { Button, Typography } from '@mui/material';
import classes from './exteriorRow.module.scss';

const ExteriorRow = (props) => {
  const {
    title, desc, img,
    changeImage, imgMuestra,
  } = props;

  return (
    <Button className={classes.button} onClick={() => changeImage(img)}>
      <img src={imgMuestra} alt={title} className={classes.img} />
      <div className={classes.textDiv}>
        <Typography className={classes.title}>
          {title}
        </Typography>
        <Typography className={classes.desc}>
          {desc}
        </Typography>
      </div>
    </Button>
  );
};

ExteriorRow.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.any.isRequired,
  imgMuestra: PropTypes.any.isRequired,
  changeImage: PropTypes.func.isRequired,
};

export { ExteriorRow };
