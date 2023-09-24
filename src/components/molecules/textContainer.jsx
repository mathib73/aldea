import * as React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { Title } from '../atoms/title';
import { Paragraph } from '../atoms/paragraph';
import classes from './textContainer.module.scss';
import { goToPage, routeNaming } from '../../navigation';
import globalStyles from '../../assets/stylesheets/globalStyles.module.scss';

const TextContainer = (props) => {
  const { title, paragraph, open } = props;
  const navigate = useNavigate();
  const abrirTrabajosGuardados = () => {
    goToPage(routeNaming.TRABAJOS, navigate);
  };
  return (
    <div className={globalStyles.baseMargin}>
      <div className={classes.titleContainer}>
        <Title title={title} className={classes.title} />
        {open
        && (
          <Button disabled variant="contained" onClick={abrirTrabajosGuardados} className={globalStyles.greenButton}>Abrir</Button>
        )}
      </div>
      {!!paragraph
      && (
        <Paragraph paragraph={paragraph} className={classes.paragraph} />
      )}
    </div>
  );
};

TextContainer.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
};

export { TextContainer };
