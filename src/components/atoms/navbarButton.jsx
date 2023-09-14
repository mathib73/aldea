import React from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
import globalStyles from '../../assets/stylesheets/globalStyles.module.scss';

const NavbarButton = (props) => {
  const { className } = props;
  return (
    <IconButton
      size="large"
      edge="start"
      aria-label="menu"
      sx={{ mr: 2 }}
      className={[globalStyles.menuButton, className].join(' ')}
    >
      <MenuIcon />
    </IconButton>
  );
};

NavbarButton.propTypes = {
  className: PropTypes.string.isRequired,
};

export { NavbarButton };
