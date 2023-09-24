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

import { ExteriorRow } from '../molecules/exteriorRow';

const Exterior = (props) => {
  const {
    continuar, anterior, rubros, prototipo,
    resultStructure, setResultStructure,
  } = props;
  const [imageClass, setImageClass] = React.useState(classes.imageBox);
  const [actualImg, setActualImg] = React.useState(rubros[0].img);
  const [selectedId, setSelectedId] = React.useState(rubros[0].id);
  const setExternal = (img, externalId) => {
    const newResultStructure = resultStructure;
    const selectedRubro = rubros.filter((r) => r.id === externalId)[0];
    newResultStructure.rubroExterno.id = selectedRubro.id;
    newResultStructure.rubroExterno.title = selectedRubro.title;
    newResultStructure.rubroExterno.cost = selectedRubro.cost;
    newResultStructure.rubroExterno.desc = selectedRubro.desc;
    setResultStructure(newResultStructure);
    setActualImg(img);
    setSelectedId(externalId);
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
            {prototipo.title}
          </Typography>
          <Typography className={classes.subTitle}>
            El exterior de la casa
          </Typography>
          <Typography className={classes.text}>
            Definición del revestimiento exterior de la casa.
          </Typography>
          {rubros.map((e) => (
            <ExteriorRow
              title={e.title}
              desc={e.desc}
              imgMuestra={e.imgMuestra}
              setExternal={() => setExternal(e.img, e.id)}
              id={e.id}
              selectedId={selectedId}
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
  rubros: PropTypes.array.isRequired,
  resultStructure: PropTypes.object.isRequired,
  setResultStructure: PropTypes.func.isRequired,
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
      usdEstandar: PropTypes.number.isRequired,
      plazoEstandar: PropTypes.string.isRequired,
      usdMovimientoTierrasEstandar: PropTypes.number.isRequired,
      usdImpuestosEstandar: PropTypes.number.isRequired,
      usdConstruccion: PropTypes.number.isRequired,
      descripcionPrototipo: PropTypes.string.isRequired,
      imageText: PropTypes.string.isRequired,
      image: PropTypes.object.isRequired,
      sketchImg: PropTypes.object.isRequired,
      plantaImage: PropTypes.object.isRequired,
      wideImg: PropTypes.object.isRequired,
    },
    grupoDeAreas: PropTypes.array.isRequired,
  }).isRequired,
};

export { Exterior };
