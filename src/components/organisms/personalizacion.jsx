import React from 'react';
import {
  Box,
  Button,
  Grid,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import classes from './personalizacion.module.scss';
import globalStyles from '../../assets/stylesheets/globalStyles.module.scss';
import expand from '../../assets/images/expand.png';

// HARCODED DATA (DELETE)
import sketchImg from '../../assets/images/trash/sketch.jpg';
import plantaImage from '../../assets/images/trash/plantas.jpg';
import wideImg from '../../assets/images/trash/wide.jpg';

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

const Personalizacion = (props) => {
  const { continuar, anterior } = props;
  const [imageClass, setImageClass] = React.useState(classes.imageBox);
  const [textDivClass, setTextDivClass] = React.useState(classes.imageTextDiv);
  const [actualImg, setActualImg] = React.useState(sketchImg);
  const openPlantas = () => {
    setActualImg(plantaImage);
  };
  const openSketch = () => {
    setActualImg(sketchImg);
  };
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
            <Button variant="contained" onClick={openPlantas} className={globalStyles.greenButton}>
              Plantas
            </Button>
            <Button variant="contained" onClick={console.log('asd')} className={globalStyles.greenButton}>
              Cortes
            </Button>
            <Button variant="contained" onClick={console.log('asd')} className={globalStyles.greenButton}>
              Fachadas
            </Button>
            <Button variant="contained" onClick={openSketch} className={globalStyles.greenButton}>
              Imagenes
            </Button>
          </div>
          <Box
            component="img"
            alt="sketch"
            src={actualImg}
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
  );
};

Personalizacion.propTypes = {
  continuar: PropTypes.func.isRequired,
  anterior: PropTypes.func.isRequired,
};

export { Personalizacion };
