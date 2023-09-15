import React from 'react';
import {
  Box,
  Button,
  Grid,
  Typography,
} from '@mui/material';
import classes from './personalizacoin.module.scss';
import globalStyles from '../../assets/stylesheets/globalStyles.module.scss';
import { Navbar } from '../molecules/navbar';
import { TextContainer } from '../molecules/textContainer';
import { Stepper } from '../organisms/stepper';
import expand from '../../assets/images/expand.png';

// HARCODED DATA (DELETE)
import sketchImg from '../../assets/images/trash/sketch.jpg';
import wideImg from '../../assets/images/trash/wide.jpg';

const title = 'Personalización';
const imageText = `Interactúa con el modelo para
                  conocer la volumetría del proyecto.`;
const data = {
  information: `Breve memoria del proyecto con realizada por el estudio de arquitectura.
                    Sería una descripción a nivel conceptual..

                    Breve memoria del proyecto con realizada por el estudio de arquitectura.
                    Sería una descripción a nivel conceptual.

                    Breve memoria del proyecto con realizada por el estudio de arquitectura.
                    Sería una descripción a nivel conceptual.`,
};

const anterior = () => {
  console.log('anterior');
};
const continuar = () => {
  console.log('continuar');
};

const Personalizacion = () => {
  const [step, setStep] = React.useState(0);
  const [imageClass, setImageClass] = React.useState(classes.imageBox);
  const [textDivClass, setTextDivClass] = React.useState(classes.imageTextDiv);

  const toggleSize = () => {
    if (imageClass === classes.imageBox) {
      setImageClass(classes.imageBoxExpanded);
      setTextDivClass(classes.imageTextDivExpanded);
    } else {
      setImageClass(classes.imageBox);
      setTextDivClass(classes.imageTextDiv);
    }
  };
  return (
    <div className={classes.container}>
      <Grid
        container
        className={classes.gridContainer}
        direction="column"
      >
        <Navbar />
        <TextContainer title={title} paragraph={null} open={false} />
        <Box className={[classes.boxContainer, globalStyles.baseMargin].join(' ')}>
          <Stepper currentStep={step} />
          <Grid
            className={classes.innerGrid}
            spacing={8}
          >
            <Grid className={classes.leftGrid} xs={4}>
              <div className={classes.div}>
                <Box
                  component="img"
                  alt="wide"
                  src={wideImg}
                  className={classes.imageBoxWide}
                />
                <Typography className={classes.title}>
                  La Casa Tito.
                </Typography>
                <ul className={classes.list}>
                  <li>Terreno X1</li>
                  <li>120 m2 interiores</li>
                  <li>2 Dormitorios</li>
                  <li>2 baños</li>
                </ul>
                <div className={classes.informationTextDiv}>
                  <Typography>
                    {data.information}
                  </Typography>
                </div>
                <div className={classes.buttonLeftDiv}>
                  <Button variant="contained" onClick={anterior} className={globalStyles.greenButton}>
                    Anterior
                  </Button>
                  <Button variant="contained" onClick={continuar} className={globalStyles.greenButton}>
                    Continuar
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid className={classes.rightGrid} xs={8}>
              <div className={classes.div}>
                <div className={classes.buttonRightDiv}>
                  <Button variant="contained" onClick={anterior} className={globalStyles.greenButton}>
                    Plantas
                  </Button>
                  <Button variant="contained" onClick={continuar} className={globalStyles.greenButton}>
                    Cortes
                  </Button>
                  <Button variant="contained" onClick={continuar} className={globalStyles.greenButton}>
                    Fachadas
                  </Button>
                  <Button variant="contained" onClick={continuar} className={globalStyles.greenButton}>
                    Imagenes
                  </Button>
                </div>
                <Box
                  component="img"
                  alt="sketch"
                  src={sketchImg}
                  className={imageClass}
                />
                <div className={textDivClass}>
                  <Typography className={classes.imageText}>
                    {imageText}
                  </Typography>
                </div>
                <Button variant="contained" onClick={toggleSize} className={classes.expandButton}>
                  <img src={expand} alt="expand" />
                </Button>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
};

export { Personalizacion };
