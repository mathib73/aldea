import React from 'react';
import {
  Box,
  Grid,
} from '@mui/material';
import classes from './steps.module.scss';
import globalStyles from '../../assets/stylesheets/globalStyles.module.scss';
import { Navbar } from '../molecules/navbar';
import { TextContainer } from '../molecules/textContainer';
import { Stepper } from '../organisms/stepper';

// HARCODED DATA (DELETE)
import { Personalizacion } from '../organisms/personalizacion';
import { Exterior } from '../organisms/exterior';
import { Interior } from '../organisms/interior';

const titles = [
  'Personalización',
  'Personalización',
  'Terminaciones & Detalles',
  'Terminaciones & Detalles',
];

const Steps = () => {
  const [step, setStep] = React.useState(0);

  const anterior = () => {
    if (step !== 0) {
      setStep(step - 1);
    }
  };
  const continuar = () => {
    setStep(step + 1);
  };

  return (
    <div className={classes.container}>
      <Grid
        container
        className={classes.gridContainer}
        direction="column"
      >
        <Navbar />
        <TextContainer title={titles[step]} paragraph={null} open={false} />
        <Box className={[classes.boxContainer, globalStyles.baseMargin].join(' ')}>
          <Stepper currentStep={step} />
          {step === 0
          && (
            <Personalizacion continuar={continuar} anterior={anterior} />
          )}
          {step === 1
            && (
              <Exterior continuar={continuar} anterior={anterior} />
            )}
          {step === 2
            && (
              <Interior continuar={continuar} anterior={anterior} />
            )}
        </Box>
      </Grid>
    </div>
  );
};

export { Steps };
