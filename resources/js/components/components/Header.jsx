import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Logo from '../assets/logo.png';
import { Box } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    justifyContent: 'space-between',
    backgroundColor: theme.palette.primary.main,
  },
  link: {
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    marginRight: theme.spacing(2),
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    backgroundColor: 'white',
    paddingLeft: '15px',
    paddingRight: '15px',
    borderRadius: '10px'
  },
  logo: {
    height: '40px',
    marginRight: theme.spacing(1),
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.logoLink}>
            <img src={Logo} alt="logo" className={classes.logo} />
            <Typography variant="h6" component="h1">
              FIND_CLASS
            </Typography>
          </Link>
          <Box>
            <Link to="/classes" className={classes.link}>
              Классы
            </Link>
            <Link to="/teachers" className={classes.link}>
              Учителя
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;