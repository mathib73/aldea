import React from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
import globalStyles from '../../assets/stylesheets/globalStyles.module.scss';
import { goToPage, routeNaming } from '../../navigation';
import { useNavigate } from 'react-router-dom';

const sendExcel = (e) => {
  console.log(e.target.value);
};

const NavbarButton = (props) => {
  const { className, setOpen } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = () => {
    goToPage(routeNaming.HOME, navigate);
  };
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        aria-label="menu"
        sx={{ mr: 2 }}
        className={[globalStyles.menuButton, className].join(' ')}
        onClick={handleMenu}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => setOpen(true)}>Cargar excel</MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

NavbarButton.propTypes = {
  className: PropTypes.string.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export { NavbarButton };
