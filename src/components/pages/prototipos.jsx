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

// HARCODED DATA (DELETE)
import image1 from '../../assets/images/trash/1.png';
import image2 from '../../assets/images/trash/2.png';
import image3 from '../../assets/images/trash/3.png';

const images = [
  image1,
  image2,
  image3,
];
const prototipos = [
  {
    id: 1,
    title: 'Casa tito 1',
    data: {
      land: 'Terreno X1',
      m2: '120',
      bedrooms: '2',
    },
  },
  {
    id: 2,
    title: 'Casa tito 2',
    data: {
      land: 'Terreno X2',
      m2: '240',
      bedrooms: '3',
    },
  },
  {
    id: 3,
    title: 'Casa tito 3',
    data: {
      land: 'Terreno X3',
      m2: '120',
      bedrooms: '2',
    },
  },
  {
    id: 4,
    title: 'Casa tito 4',
    data: {
      land: 'Terreno X4',
      m2: '200',
      bedrooms: '3',
    },
  },
  {
    id: 5,
    title: 'Casa tito 5',
    data: {
      land: 'Terreno X5',
      m2: '200',
      bedrooms: '3',
    },
  },
  {
    id: 6,
    title: 'Casa tito 6',
    data: {
      land: 'Terreno X',
      m2: '200',
      bedrooms: '3',
    },
  },
];

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
            prototipos.map((p, key) => (
              <CardSlider id={p.id} title={p.title} data={p.data} image={images[key % 3]} />
            ))
          }
        </Stack>
      </Box>
    </Grid>
  </div>
);

export { Prototipos };
