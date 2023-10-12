import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { NavbarButton } from '../atoms/navbarButton';
import navbarLogo from '../../assets/images/navbar-logo.svg';
import classes from './navbar.module.scss';
import { goToPage, routeNaming } from '../../navigation';
import { Menu } from '@mui/material';

const Navbar = (props) => {
  const { setOpen } = props;
  const navigate = useNavigate();
  return (
    <Box>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.navbar}>
          <Button onClick={() => goToPage(routeNaming.PROTOTIPOS, navigate)}>
            <img src={navbarLogo} alt="Logo Aldea" />
          </Button>
          <NavbarButton className={' '} setOpen={setOpen} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

Navbar.propTypes = {
  setOpen: PropTypes.func.isRequired,
};

export { Navbar };
