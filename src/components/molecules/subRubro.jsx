import React from 'react';
import PropTypes from 'prop-types';

import {
  Box, Grid, Typography,
} from '@mui/material';
import classes from './subRubro.module.scss';
import { SubRubroFormGroup } from '../atoms/subRubroFormGroup';

const SubRubro = (props) => {
  const {
    rubro, resultStructure, setResultStructure,
  } = props;
  const changeStructure = (selectedRubro, subRubro, optionId) => {
    const selectedOption = subRubro.opciones.find(
      (option) => option.id.toString() === optionId.toString(),
    );
    const newResultStructure = { ...resultStructure };
    // creo el subrubor a agregar/cambiar
    const newSubRubro = {
      id: subRubro.id,
      title: subRubro.title,
      option: {
        id: selectedOption.id,
        title: selectedOption.title,
        cost: selectedOption.cost,
        moneda: selectedOption.moneda,
        medidaUnidad: selectedOption.medidaUnidad,
      },
    };

    // predicados para la busqueda
    const predicateRubro = (searchRubro) => searchRubro.id === selectedRubro.id;
    const predicateSubRubro = (searchSubRubro) => searchSubRubro.id === subRubro.id;

    // busco si existe el rubro en la estructura
    const rubroIndex = resultStructure.rubrosInternos.findIndex(predicateRubro);
    if (rubroIndex !== -1) {
      // existe el rubro
      // busco si existe el subRubro en la estructura
      const subRubroIndex = resultStructure
        .rubrosInternos[rubroIndex].subRubros.findIndex(predicateSubRubro);
      if (subRubroIndex !== -1) {
        // existe el subRubro
        // lo cambio por el nuevo con la nueva opcion
        newResultStructure.rubrosInternos[rubroIndex].subRubros[subRubroIndex] = newSubRubro;
      } else {
        // existe el Rubro pero no el subRubro
        // lo agrego
        newResultStructure.rubrosInternos[rubroIndex].subRubros.push(newSubRubro);
      }
    } else {
      // no existe el rubro
      // lo creo y agrego
      const newRubro = {
        id: rubro.id,
        title: rubro.title,
        subRubros: [
          newSubRubro,
        ],
      };
      newResultStructure.rubrosInternos.push(newRubro);
    }

    setResultStructure(newResultStructure);
  };

  return (
    <Grid container className={classes.containerGrid}>
      <Typography className={classes.title}>
        {rubro.title}
      </Typography>
      <Box className={classes.box}>
        {rubro.subRubros.map((subRubro) => {
          if (subRubro.opciones.length) {
            return (
              <SubRubroFormGroup
                rubro={rubro}
                subRubro={subRubro}
                changeStructure={changeStructure}
                resultStructure={resultStructure}
              />
            );
          }
          return null;
        })}
      </Box>
    </Grid>
  );
};

SubRubro.propTypes = {
  rubro: PropTypes.object.isRequired,
  resultStructure: PropTypes.object.isRequired,
  setResultStructure: PropTypes.func.isRequired,
};

export { SubRubro };
