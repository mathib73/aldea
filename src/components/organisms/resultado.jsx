import React from 'react';
import {
  Button,
  Grid,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import classes from './resultado.module.scss';
import globalStyles from '../../assets/stylesheets/globalStyles.module.scss';

import { ResultRow } from '../molecules/resultRow';
import { ResultList } from '../molecules/resultList';

const descargar = () => {
  window.print();
};

const leftData = [
  {
    title: 'Plazo de entrega',
    isMoney: false,
    prototipoField: 'plazoEstandar',
  },
  {
    title: 'Implantación',
    isMoney: true,
    currency: 'USD',
    prototipoField: 'usdEstandar',
  },
  {
    title: 'Movimientos de tierra',
    isMoney: true,
    currency: 'USD',
    prototipoField: 'usdMovimientoTierrasEstandar',
  },
  {
    title: 'Construcción',
    isMoney: true,
    currency: 'USD',
    prototipoField: 'usdConstruccion',
  },
  {
    title: 'Impuestos',
    isMoney: true,
    currency: 'USD',
    prototipoField: 'usdImpuestosEstandar',
  },
];

const Resultado = (props) => {
  const {
    anterior, prototipo,
    resultStructure,
  } = props;
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    let returnTotal = 0;
    // valores generales y exteriores
    leftData.forEach((data, iter) => {
      if (iter !== 0) returnTotal += prototipo.data[data.prototipoField];
    });
    returnTotal += prototipo.data.m2Exteriores * resultStructure.rubroExterno.cost;
    // valores interiores
    resultStructure.rubrosInternos.forEach((rubro) => {
      rubro.subRubros.forEach((subRubro) => {
        returnTotal += subRubro.option.cost * prototipo.data.m2Interiores;
      });
    });
    setTotal(returnTotal);
  }, []);
  return (
    <Grid
      container
      className={classes.innerGrid}
    >
      <Grid className={classes.leftGrid} xs={4}>
        <div className={classes.leftDiv}>
          <Typography className={classes.title}>
            {prototipo.title}
          </Typography>
          <Typography className={classes.subTitle}>
            El interior de la casa
          </Typography>
          <Typography className={classes.text}>
            Definición de terminaciones y detalles interiores
          </Typography>
          <div className={classes.leftResultDiv}>
            {leftData.map((data, iter) => {
              if (!data.isMoney) {
                return (
                  <>
                    <ResultRow title={data.title} text={prototipo.data[data.prototipoField]} />
                    {iter === 0
                      && (
                        <div className={classes.horizontalSeparator} />
                      )}
                  </>
                );
              }
              return (
                <>
                  <ResultRow
                    title={data.title}
                    text={prototipo.data[data.prototipoField]}
                    isMoney
                    currency={data.currency}
                  />
                  {iter === 0
                    && (
                      <div className={classes.horizontalSeparator} />
                    )}
                </>
              );
            })}
          </div>
          <div className={classes.horizontalSeparator} />
          <div className={classes.totalDiv}>
            <Typography className={classes.totalText}> Total: </Typography>
            <div className={classes.totalResultDiv}>
              <Typography className={classes.totalText}>
                {`USD ${Intl.NumberFormat('en-US').format(total)}`}
              </Typography>
              <Typography className={classes.impuestosText}> impuestos incluidos*</Typography>
            </div>
          </div>
        </div>
        <div className={classes.separator} />
      </Grid>
      <Grid className={classes.rightGrid} xs={8}>
        {resultStructure.rubrosInternos.map((rubro, iter) => (
          <ResultList rubro={rubro} isExternal={false} listNumber={iter + 1} />
        ))}
      </Grid>
      <div className={classes.buttonLeftDiv}>
        <Button variant="contained" onClick={anterior} className={globalStyles.greenButton}>
          Anterior
        </Button>
        <Button disabled variant="contained" onClick={() => console.log('asd')} className={globalStyles.greenButton}>
          Guardar
        </Button>
        <Button variant="contained" onClick={descargar} className={globalStyles.greenButton}>
          Descargar
        </Button>
      </div>
    </Grid>
  );
};

Resultado.propTypes = {
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
  resultStructure: PropTypes.object.isRequired,
};

export { Resultado };
