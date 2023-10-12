import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './cardSlider.module.scss';
import { goToPage, routeNaming } from '../../navigation';

const CardSlider = (props) => {
  const {
    prototipo,
  } = props;
  const navigate = useNavigate();
  const goToSteps = () => {
    goToPage(routeNaming.STEPS, navigate, { id: prototipo.id });
  };
  return (
    <Card className={classes.card}>
      <CardActionArea onClick={goToSteps}>
        <CardMedia
          component="img"
          image={prototipo.data.image}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom className={classes.cardTitle} component="div">
            {prototipo.title}
          </Typography>
          <div className={classes.dataDiv}>
            <ul className={classes.list}>
              <li>
                <Typography className={classes.cardData}>
                  {prototipo.data.land}
                </Typography>
              </li>
              <li>
                <Typography className={classes.cardData}>
                  {`${prototipo.data.m2Interiores} m2 interiores`}
                </Typography>
              </li>
              <li>
                <Typography className={classes.cardData}>
                  {`${prototipo.data.dormitorios} dormitorios`}
                </Typography>
              </li>
            </ul>
            <Button className={classes.roundedButton}>
              <ArrowForwardIcon fontSize="large" className={classes.arrow} />
            </Button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

CardSlider.propTypes = {
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
      descripciónPrototipo: PropTypes.string.isRequired,
      imageText: PropTypes.string.isRequired,
      image: PropTypes.object.isRequired,
      sketchImg: PropTypes.object.isRequired,
      plantaImage: PropTypes.object.isRequired,
      wideImg: PropTypes.object.isRequired,
    },
  }).isRequired,
};

export { CardSlider };
