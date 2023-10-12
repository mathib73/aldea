import React from 'react';
import {
  Box,
  CircularProgress,
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
import { Resultado } from '../organisms/resultado';
import { getPrototipo } from '../../controllers/prototipeController';

const titles = [
  'Personalización',
  'Personalización',
  'Terminaciones & Detalles',
  'Terminaciones & Detalles',
];

const Steps = () => {
  const [step, setStep] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
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
  const getRubros = (p) => {
    const rubrosExt = p.rubrosExteriores;
    const rubrosInt = p.rubrosInteriores;
    setRubrosExteriores(rubrosExt);
    setRubrosInteriores(rubrosInt);
  };

  React.useEffect(async () => {
    setLoading(true);
    const prototipoFromDB = await getPrototipo(id);
    setPrototipo(prototipoFromDB.prototipo);
    setResultStructure({ ...resultStructure, prototipoId: prototipoFromDB.prototipo.id });
    getRubros(prototipoFromDB);
    setLoading(false);
  }, []);

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
          {!loading
          && (
            <>
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
            </>
          )}
          {loading
            && (
              <CircularProgress sx={{ color: 'white' }} />
            )}
        </Box>
      </Grid>
    </div>
  );
};

export { Steps };
