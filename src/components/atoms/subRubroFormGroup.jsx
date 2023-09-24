import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControlLabel, FormGroup, Grid,
  Radio, RadioGroup, Typography,
} from '@mui/material';

import classes from '../molecules/subRubro.module.scss';

const SubRubroFormGroup = (props) => {
  const {
    subRubro, changeStructure, rubro,
    resultStructure,
  } = props;
  const [selectedValue, setSelectedValue] = React.useState('');

  const onChange = (e) => {
    setSelectedValue(e.target.value);
    changeStructure(rubro, subRubro, e.target.value);
  };

  React.useEffect(() => {
    const predicateRubro = (searchRubro) => searchRubro.id === rubro.id;
    const predicateSubRubro = (searchSubRubro) => searchSubRubro.id === subRubro.id;
    const rubroIndex = resultStructure.rubrosInternos.findIndex(predicateRubro);
    if (rubroIndex !== -1) {
      const subRubroIndex = resultStructure
        .rubrosInternos[rubroIndex].subRubros.findIndex(predicateSubRubro);

      if (subRubroIndex !== -1) {
        const optValue = resultStructure
          .rubrosInternos[rubroIndex]
          .subRubros[subRubroIndex].option.id;
        setSelectedValue(optValue);
      }
    }
  }, [rubro]);
  return (
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
          onChange={onChange}
          value={selectedValue}
        >
          {subRubro.opciones.map((opt) => (
            <div className={classes.checkboxDiv}>
              <FormControlLabel
                control={<Radio />}
                className={classes.checkbox}
                value={opt.id}
              />
              <div className={classes.optionTextDiv}>
                <Typography className={classes.optionText}>{opt.title}</Typography>
                <Typography className={classes.optionText2}>{`${opt.moneda} ${opt.cost}/${opt.medidaUnidad}`}</Typography>
              </div>
            </div>
          ))}
        </RadioGroup>
      </FormGroup>
    </Grid>
  );
};

SubRubroFormGroup.propTypes = {
  subRubro: PropTypes.object.isRequired,
  rubro: PropTypes.object.isRequired,
  resultStructure: PropTypes.object.isRequired,
  changeStructure: PropTypes.func.isRequired,
};

export { SubRubroFormGroup };
