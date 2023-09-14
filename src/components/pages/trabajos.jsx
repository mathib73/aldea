import React from 'react';
import {
  Box, Grid,
} from '@mui/material';
import classes from './prototipos.module.scss';
import globalStyles from '../../assets/stylesheets/globalStyles.module.scss';
import { Navbar } from '../molecules/navbar';
import { TextContainer } from '../molecules/textContainer';
import { TablaTrabajosGuardados } from '../organisms/tablaTrabajosGuardados';

const title = 'Trabajos guardados';
const paragraph = `Aquí distintos prototipos de casas proyectados especialmente para el
barrio. Todos ellos siguen el espíritu del barrio y están pensadas en
función de los sistemas constructivos que se implementarían.`;
const Trabajos = () => (
  <div className={classes.container}>
    <Grid
      container
      className={classes.gridContainer}
      direction="column"
    >
      <Navbar />
      <Box className={classes.boxContainer}>
        <TextContainer title={title} paragraph={paragraph} open={false} />
        <TablaTrabajosGuardados />
      </Box>
    </Grid>
  </div>
);

export { Trabajos };
