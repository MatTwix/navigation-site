import React, { useState, useEffect }from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Grid, Paper, ButtonBase} from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'; 

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 800,
    },
    image: {
        width: 128,
        height: 128,
        margin: 'auto',
        display: 'block',
        borderRadius: '50%',
        border: '2px solid #fff',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
            transform: 'scale(1.2)',
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
        },
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    carousel: {
        marginBottom: theme.spacing(4),
    },
}));

const ClassPage = () => {
    const params = useParams();

    const id = +params.id;

    const [classroom, setClassroom] = useState([]);

    const fetchClassroom = async () => {
        await axios.get(`http://localhost:8000/api/classrooms/${id}`).then(({ data }) => {
            setClassroom(data.data);
        });
    }

    useEffect(() => {
        fetchClassroom();
    }, []);
    
    const { name, number, way_to, owner, subjects, images } = classroom;
    
    const classesStyles = useStyles();

    return classroom.length != 0
    ? (
        <div className={classesStyles.root}>
            <Paper className={classesStyles.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classesStyles.image}>
                            <img
                                className={classesStyles.img}
                                alt="class"
                                src={owner.image}
                            />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="h4">
                                    {name}
                                </Typography>
                                <Typography variant="h5" gutterBottom>
                                    {number}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    {way_to}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {owner.name}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" gutterBottom>
                                    Subjects:
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {subjects.map((s) => s.name).join(', ')}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Carousel className={classesStyles.carousel}>
                    {images.map((image) => (
                        <img key={image.id} src={image.path} alt={name} />
                    ))}
                </Carousel>
            </Paper>
        </div>
    )
    : ( <p>Такого класса нет</p> );
};

export default ClassPage;