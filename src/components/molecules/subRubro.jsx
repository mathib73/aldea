import React from 'react';
import PropTypes from 'prop-types';

import {
  Box,
  Checkbox, FormControlLabel,
  FormGroup, Grid, Radio, RadioGroup, Typography,
} from '@mui/material';
import classes from './subRubro.module.scss';

const SubRubro = (props) => {
  const {
    rubro,
  } = props;
  return (
    <Grid container className={classes.containerGrid}>
      <Typography className={classes.title}>
        {rubro.title}
      </Typography>
      <Box className={classes.box}>
        {rubro.subRubros.map((subRubro) => (
          <Grid xs={6}>
            <div className={classes.subRubroTitleDiv}>
              <Typography className={classes.subRubroTitle}>
                {subRubro.title}
              </Typography>
              <Typography className={classes.subRubroTitle}>
                Costo
              </Typography>
            </div>
            <FormGroup>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
              >
                {subRubro.opciones.map((opt) => (
                  <div className={classes.checkboxDiv}>
                    <FormControlLabel
                      control={<Radio />}
                      className={classes.checkbox}
                      value={opt.title}
                    />
                    <div className={classes.optionTextDiv}>
                      <Typography className={classes.optionText}>{opt.title}</Typography>
                      <Typography className={classes.optionText2}>{`${opt.moneda} ${opt.costo}/${opt.medidaUnidad}`}</Typography>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </FormGroup>
          </Grid>
        ))}
      </Box>
    </Grid>
  );
};

SubRubro.propTypes = {
  rubro: PropTypes.object.isRequired,
};

export { SubRubro };
