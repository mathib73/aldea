import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@mui/material';
import classes from './stepper.module.scss';

const getClassName = (currentStep, step) => {
  if (currentStep === step) return classes.current;
  if (currentStep > step) return classes.stepperItem;
  return classes.complete;
};
const data = [
  {
    title: '1.  Aspectos generales',
    text: `Sistema constructivo y cantidad
          de espacios.`,
  },
  {
    title: '2. El exterior de la casa',
    text: 'Materialidad exterior de la casa.',
  },
  {
    title: '3. Tercera etapa',
    text: 'Especificación de terminaciones.',
  },
  {
    title: '4. Resultado',
    text: '',
  },
];

const Stepper = (props) => {
  const { currentStep } = props;
  return (
    <ul className={classes.stepper}>
      {data.map((s, step) => (
        <li className={getClassName(currentStep, step)}>
          <Typography className={classes.title}>
            {s.title}
          </Typography>
          <Typography className={classes.text}>
            {s.text}
          </Typography>
        </li>
      ))}
    </ul>
  );
};

Stepper.propTypes = {
  currentStep: PropTypes.string.isRequired,
};

export { Stepper };
