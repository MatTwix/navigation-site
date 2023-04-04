import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Box } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(2),
  },
}));

function HomePage() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h1" component="h1" align="center">
        Добро пожаловать на наш сайт для школьников!
      </Typography>
      <Typography variant="subtitle1" component="p" align="center">
        Здесь вы найдете множество полезных ресурсов для учебы и саморазвития.
      </Typography>
      <Typography variant="subtitle1" component="p" align="center">
        Мы использовали библиотеку Material-UI для создания удобного и современного интерфейса сайта.
      </Typography>
      <Typography variant="subtitle1" component="p" align="center">
        Вы можете легко найти нужный раздел и перейти к необходимой информации всего в несколько кликов.
      </Typography>
      <Typography variant="subtitle1" component="p" align="center">
        Мы собрали для вас ссылки на интересные статьи, видеоуроки и тесты по различным предметам.
      </Typography>
      <Typography variant="subtitle1" component="p" align="center">
        Также вы можете найти здесь информацию о профессиях и университетах, которые могут быть вам интересны.
      </Typography>
      <Typography variant="subtitle1" component="p" align="center">
        Если у вас есть какие-либо вопросы или предложения по улучшению нашего сайта, пожалуйста, свяжитесь с нами через форму обратной связи.
      </Typography>
      <Typography variant="subtitle1" component="p" align="center">
        Мы надеемся, что наш сайт поможет вам в учебе!
      </Typography>
    </Box>
  );
}

export default HomePage;
