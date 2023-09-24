import React from 'react';
import {
  Box,
  Grid, Stack,
} from '@mui/material';
import classes from './prototipos.module.scss';
import globalStyles from '../../assets/stylesheets/globalStyles.module.scss';
import { Navbar } from '../molecules/navbar';
import { TextContainer } from '../molecules/textContainer';
import { CardSlider } from '../molecules/cardSlider';

// change for DB
import { prototipos } from '../../assets/trashData/prototipos';

const title = 'Los prototipos';
const paragraph = `Aquí distintos prototipos de casas proyectados especialmente para el
barrio. Todos ellos siguen el espíritu del barrio y están pensadas en
función de los sistemas constructivos que se implementarían.`;

const Prototipos = () => (
  <div className={classes.container}>
    <Grid
      container
      className={classes.gridContainer}
      direction="column"
    >
      <Navbar />
      <TextContainer title={title} paragraph={paragraph} open />
      <Box className={[classes.boxContainer, globalStyles.baseMargin].join(' ')}>
        <Stack direction="row" spacing={2} className={classes.stack}>
          {
            prototipos.map((p) => (
              <CardSlider
                prototipo={p}
              />
            ))
          }
        </Stack>
      </Box>
    </Grid>
  </div>
);

export { Prototipos };
