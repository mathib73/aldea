import React from 'react';
import {
  Box,
  Grid,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import classes from './steps.module.scss';
import globalStyles from '../../assets/stylesheets/globalStyles.module.scss';
import { Navbar } from '../molecules/navbar';
import { TextContainer } from '../molecules/textContainer';
import { Stepper } from '../organisms/stepper';

import { Personalizacion } from '../organisms/personalizacion';
import { Exterior } from '../organisms/exterior';
import { Interior } from '../organisms/interior';

// get from DB
import { prototipos } from '../../assets/trashData/prototipos';
import { rubrosExteriores as rubrosExterioresHarcoded } from '../../assets/trashData/rubrosExteriores';
import { rubrosInteriores as rubrosInterioresHarcoded } from '../../assets/trashData/rubrosInteriores';
import { Resultado } from '../organisms/resultado';

const titles = [
  'Personalización',
  'Personalización',
  'Terminaciones & Detalles',
  'Terminaciones & Detalles',
];

const Steps = () => {
  const [step, setStep] = React.useState(0);
  const [resultStructure, setResultStructure] = React.useState(
    {
      rubroExterno: {
        id: '',
        title: '',
        cost: '',
      },
      rubrosInternos: [],
      prototipoId: '',
    },
  );
  const [prototipo, setPrototipo] = React.useState(null);
  const [rubrosExteriores, setRubrosExteriores] = React.useState([]);
  const [rubrosInteriores, setRubrosInteriores] = React.useState([]);
  const { id } = useParams();

  const anterior = () => {
    if (step !== 0) {
      setStep(step - 1);
    }
  };
  const continuar = () => {
    setStep(step + 1);
  };
  // change for DB request
  const getRubrosExteriores = () => {
    const returnRubros = rubrosExterioresHarcoded;
    return returnRubros;
  };
  // change for DB request
  const getRubrosInteriores = () => {
    const returnRubros = rubrosInterioresHarcoded;
    return returnRubros;
  };
  // change for DB request
  const getRubros = () => {
    const rubrosExt = getRubrosExteriores();
    const rubrosInt = getRubrosInteriores();

    setRubrosExteriores(rubrosExt);
    setRubrosInteriores(rubrosInt);
  };
  const getPrototipo = () => {
    // change for DB request
    const prototipoFromDB = prototipos.filter((p) => p.id.toString() === id)[0];
    setPrototipo(prototipoFromDB);
    setResultStructure({ ...resultStructure, prototipoId: prototipoFromDB.id });
  };

  React.useEffect(() => {
    getPrototipo();
    getRubros();
  }, []);

  return (
    <div className={classes.container}>
      {prototipo
      && (
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
                <Personalizacion
                  continuar={continuar}
                  anterior={anterior}
                  prototipo={prototipo}
                  resultStructure={resultStructure}
                  setResultStructure={setResultStructure}
                />
              )}
            {step === 1
              && (
                <Exterior
                  continuar={continuar}
                  anterior={anterior}
                  prototipo={prototipo}
                  resultStructure={resultStructure}
                  setResultStructure={setResultStructure}
                  rubros={rubrosExteriores}
                />
              )}
            {step === 2
              && (
                <Interior
                  continuar={continuar}
                  anterior={anterior}
                  resultStructure={resultStructure}
                  setResultStructure={setResultStructure}
                  rubros={rubrosInteriores}
                  prototipo={prototipo}
                />
              )}
            {step === 3
              && (
                <Resultado
                  anterior={anterior}
                  resultStructure={resultStructure}
                  setResultStructure={setResultStructure}
                  rubros={rubrosInteriores}
                  prototipo={prototipo}
                />
              )}
          </Box>
        </Grid>
      )}
    </div>
  );
};

export { Steps };
