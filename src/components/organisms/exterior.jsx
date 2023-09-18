import React from 'react';
import {
  Box,
  Button,
  Grid,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import classes from './exterior.module.scss';
import globalStyles from '../../assets/stylesheets/globalStyles.module.scss';
import expand from '../../assets/images/expand.png';

// HARCODED DATA (DELETE)
import maderaRojo from '../../assets/images/trash/madera-rojo.png';
import maderaOtro from '../../assets/images/trash/madera-otro.png';
import imgMuestra from '../../assets/images/trash/imgMuestra.png';
import { ExteriorRow } from '../molecules/exteriorRow';

const exteriorRows = [
  {
    id: 1,
    title: 'Otro tipo de Madera.',
    desc: 'Revestimiento de chapa metálica acanalada vertical u horizontal.',
    img: maderaOtro,
    imgMuestra,
  },
  {
    id: 2,
    title: 'Madera pintada de rojo.',
    desc: 'Tablas de madera pintadas de rojo.',
    img: maderaRojo,
    imgMuestra,
  },
  {
    id: 3,
    title: 'Otro tipo de Madera.',
    desc: 'Revestimiento de chapa metálica acanalada vertical u horizontal.',
    img: maderaOtro,
    imgMuestra,
  },
  {
    id: 4,
    title: 'Madera pintada de rojo.',
    desc: 'Tablas de madera pintadas de rojo.',
    img: maderaRojo,
    imgMuestra,
  },
  {
    id: 5,
    title: 'Otro tipo de Madera.',
    desc: 'Revestimiento de chapa metálica acanalada vertical u horizontal.',
    img: maderaOtro,
    imgMuestra,
  },
];

const Exterior = (props) => {
  const { continuar, anterior } = props;
  const [imageClass, setImageClass] = React.useState(classes.imageBox);
  const [actualImg, setActualImg] = React.useState(maderaOtro);
  const changeImage = (img) => {
    setActualImg(img);
  };
  const toggleSize = () => {
    if (imageClass === classes.imageBox) {
      setImageClass(classes.imageBoxExpanded);
    } else {
      setImageClass(classes.imageBox);
    }
  };
  return (
    <Grid
      className={classes.innerGrid}
      spacing={8}
    >
      <Grid className={classes.leftGrid} xs={4}>
        <div className={classes.div}>
          <Typography className={classes.title}>
            La Casa Tito.
          </Typography>
          <Typography className={classes.subTitle}>
            El exterior de la casa
          </Typography>
          <Typography className={classes.text}>
            Definición del revestimiento exterior de la casa.
          </Typography>
          {exteriorRows.map((e) => (
            <ExteriorRow
              img={e.img}
              title={e.title}
              desc={e.desc}
              imgMuestra={e.imgMuestra}
              changeImage={changeImage}
            />
          ))}
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
          <Box
            component="img"
            alt="sketch"
            src={actualImg}
            className={imageClass}
          />
          <Button variant="contained" onClick={toggleSize} className={classes.expandButton}>
            <img src={expand} alt="expand" />
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

Exterior.propTypes = {
  continuar: PropTypes.func.isRequired,
  anterior: PropTypes.func.isRequired,
};

export { Exterior };
