import React, { useEffect, useState } from 'react';
import ClassCard from '../components/ClassCard';
import { Grid, makeStyles } from "@material-ui/core";
import axios from 'axios';

const ClassesPage = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(4),
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
        }
    }));

    const [classroomsList, setClassroomsList] = useState([]);

    const fetchClassrooms = async () => {
        await axios.get('http://localhost:8000/api/classrooms').then(({ data }) => {
            setClassroomsList(data.data);
        });
    }

    useEffect(() => {
        fetchClassrooms();
    }, []);

    const classCategories = classroomsList.reduce(
        (categories, classItem) => {
            if (classItem.destination === 1) {
                categories.classes.push(classItem);
            } else if (classItem.destination === 0) {
                classItem.subjects = [];
                categories.serviceRooms.push(classItem);
            }
            return categories;
        },
        { classes: [], serviceRooms: [] }
    );

    const classesStyles = useStyles();

    return (
        <div className={classesStyles.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1>Классы</h1>
                </Grid>
                {classCategories.classes.map((classItem, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={`class-${index}`}>
                        <ClassCard classItem={classItem} />
                    </Grid>
                ))}
                <Grid item xs={12}>
                    <h1>Служебные помещения</h1>
                </Grid>
                {classCategories.serviceRooms.map((classItem, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={`service-room-${index}`}>
                        <ClassCard classItem={classItem} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ClassesPage;
