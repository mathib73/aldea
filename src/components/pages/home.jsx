import React from 'react';
import {
  Box, Button, CircularProgress,
  Grid, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import classes from './home.module.scss';
import globalStyles from '../../assets/stylesheets/globalStyles.module.scss';
import { AppLink, goToPage, routeNaming } from '../../navigation';
import Logo from '../../assets/images/aldea-logo-v1.svg';
import { TextInput } from '../atoms/textInput';

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState(false);
  const [password, setPassword] = React.useState(false);
  const [error, setError] = React.useState(false);
  const login = () => {
    setLoading(true);
    /* conection with DB */
    console.log(email)
    console.log(password)
    if (email === 'admin' && password === 'admin') {
      setTimeout(() => { setLoading(false); goToPage(routeNaming.PROTOTIPOS, navigate); }, 2000);
    } else {
      setTimeout(() => { setLoading(false); setError(true); }, 2000);
    }
  };
  const changeEmail = (event) => {
    setError(false);
    setEmail(event.target.value);
  };
  const changePassword = (event) => {
    setError(false);
    setPassword(event.target.value);
  };
  return (
    <div className={classes.container}>
      <Grid
        container
        className={classes.gridContainer}
        direction="column"
      >
        <AppLink routeName="home" className={classes.logoContainer}>
          <img src={Logo} alt="Aldea Logo" />
        </AppLink>
        <Typography className={[globalStyles.text, classes.subTitle].join(' ')}>
          Una nueva forma de habitar
        </Typography>
        <Box
          sx={{
            width: 583,
            maxWidth: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TextInput
            error={error}
            label="Nombre de usuario"
            className={classes.input}
            value={email}
            onChange={changeEmail}
          />
          <TextInput
            error={error}
            label="Password"
            className={classes.input}
            value={password}
            onChange={changePassword}
          />
          {!loading
          && (
            <Button onClick={login} className={classes.button}>
              Iniciar
            </Button>
          )}
          {loading
            && (
              <Button className={classes.button}>
                <CircularProgress sx={{ color: 'white' }} />
              </Button>
            )}
        </Box>
      </Grid>
    </div>
  );
};

export { Home };
