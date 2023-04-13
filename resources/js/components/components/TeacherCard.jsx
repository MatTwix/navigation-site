import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 450,
    width: 300,
    margin: theme.spacing(2),
    overflow: 'auto', // добавляем возможность прокручивать содержимое
  },
  media: {
    height: 250,
  },
}));

const TeacherCard = ({ teacher }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={teacher.image} />
      <CardContent>
        <Typography variant="h6" component="h2">
          {teacher.name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            Классный руководитель: {teacher.class_leader}
        </Typography>
        <Typography variant="body1" component="p">
          Предметы, которые ведет учитель: {teacher.subjects.map((subject) => subject.name).join(', ')}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TeacherCard;
