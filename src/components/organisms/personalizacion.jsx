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

const Personalizacion = (props) => {
  const {
    continuar,
    anterior,
    prototipo,
  } = props;
  const [imageClass, setImageClass] = React.useState(classes.imageBox);
  const [textDivClass, setTextDivClass] = React.useState(classes.imageTextDiv);
  const [actualImg, setActualImg] = React.useState(prototipo.data.sketchImg);
  const openPlantas = () => {
    setActualImg(prototipo.data.plantaImage);
  };
  const openSketch = () => {
    setActualImg(prototipo.data.sketchImg);
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
            src={prototipo.data.wideImg}
            className={classes.imageBoxWide}
          />
          <Typography className={classes.title}>
            {prototipo.title}
          </Typography>
          <ul className={classes.list}>
            <li>{prototipo.data.land}</li>
            <li>{`${prototipo.data.m2Interiores} m2 interiores`}</li>
            <li>{`${prototipo.data.dormitorios} Dormitorios`}</li>
            <li>{`${prototipo.data.banos} baños`}</li>
          </ul>
          <div className={classes.informationTextDiv}>
            <Typography>
              {prototipo.data.descripcionPrototipo}
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
            <Button variant="contained" onClick={() => console.log('asd')} className={globalStyles.greenButton}>
              Cortes
            </Button>
            <Button variant="contained" onClick={() => console.log('asd')} className={globalStyles.greenButton}>
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
              {prototipo.data.imageText}
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
  prototipo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    ProyectoDe: PropTypes.string.isRequired,
    data: {
      land: PropTypes.string.isRequired,
      m2: PropTypes.number.isRequired,
      m2Interiores: PropTypes.number.isRequired,
      m2Exteriores: PropTypes.number.isRequired,
      dormitorios: PropTypes.number.isRequired,
      banos: PropTypes.number.isRequired,
      usdEstándar: PropTypes.number.isRequired,
      plazoEstándar: PropTypes.string.isRequired,
      usdMovimientoTierrasEstándar: PropTypes.number.isRequired,
      uasImpuestosEstándar: PropTypes.number.isRequired,
      descripciónPrototipo: PropTypes.string.isRequired,
      imageText: PropTypes.string.isRequired,
      image: PropTypes.object.isRequired,
      sketchImg: PropTypes.object.isRequired,
      plantaImage: PropTypes.object.isRequired,
      wideImg: PropTypes.object.isRequired,
    },
  }).isRequired,
};

export { Personalizacion };
