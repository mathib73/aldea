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
    id, image, title, data,
  } = props;
  const navigate = useNavigate();
  const goToPersonalizacion = () => {
    goToPage(routeNaming.PERSONALIZACION, navigate, { id });
  };
  return (
    <Card className={classes.card}>
      <CardActionArea onClick={goToPersonalizacion}>
        <CardMedia
          component="img"
          image={image}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom className={classes.cardTitle} component="div">
            {title}
          </Typography>
          <div className={classes.dataDiv}>
            <ul className={classes.list}>
              <li>
                <Typography className={classes.cardData}>
                  {data.land}
                </Typography>
              </li>
              <li>
                <Typography className={classes.cardData}>
                  {`${data.m2} m2 interiores`}
                </Typography>
              </li>
              <li>
                <Typography className={classes.cardData}>
                  {`${data.bedrooms} dormitorios`}
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
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
};

export { CardSlider };
