import React from 'react';
import {
  Box,
  Button,
  Grid,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import classes from './interior.module.scss';
import globalStyles from '../../assets/stylesheets/globalStyles.module.scss';
import { ExteriorRow } from '../molecules/exteriorRow';

// HARCODED DATA (DELETE)
import { rubros } from '../../assets/trashData/rubros';
import { InteriorLeftRow } from '../molecules/interiorLeftRow';
import { SubRubro } from '../molecules/subRubro';

const Interior = (props) => {
  const { anterior, continuar } = props;
  const [rubroActual, setRubroActual] = React.useState(rubros[0]);

  const changeRubro = (rubroId) => {
    const filteredRubro = rubros.filter((r) => r.id === rubroId);
    setRubroActual(filteredRubro[0]);
  };
  return (
    <Grid
      container
      className={classes.innerGrid}
    >
      <Grid className={classes.leftGrid} xs={4}>
        <div className={classes.leftDiv}>
          <Typography className={classes.title}>
            Casa Tito
          </Typography>
          <Typography className={classes.subTitle}>
            El interior de la casa
          </Typography>
          <Typography className={classes.text}>
            Definición de terminaciones y detalles interiores
          </Typography>
          <div className={classes.rubrosDiv}>
            {
              rubros.map((r, iter) => (
                <InteriorLeftRow
                  title={r.title}
                  idRubro={r.id}
                  selectedId={rubroActual.id}
                  changeRubro={changeRubro}
                  listNumber={iter + 1}
                />
              ))
            }
          </div>
        </div>
        <div className={classes.separator} />
      </Grid>
      <Grid className={classes.rightGrid} xs={8}>
        <SubRubro rubro={rubroActual} />
      </Grid>
      <div className={classes.buttonLeftDiv}>
        <Button variant="contained" onClick={anterior} className={globalStyles.greenButton}>
          Anterior
        </Button>
        <Button variant="contained" onClick={continuar} className={globalStyles.greenButton}>
          Continuar
        </Button>
      </div>
    </Grid>
  );
};

Interior.propTypes = {
  continuar: PropTypes.func.isRequired,
  anterior: PropTypes.func.isRequired,
};

export { Interior };
